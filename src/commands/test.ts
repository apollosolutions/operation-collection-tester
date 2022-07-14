import { Command, Option } from "clipanion";
import {
  OperationCollection,
  OperationCollectionsDocument,
} from "../generated/graphql";
import { getApolloClient, getTestClient } from "../graphql";

export default class TestCommand extends Command {
  static paths = [["test"], Command.Default];

  static usage = Command.Usage({
    category: "Test",
    description:
      "Executes one or more operation collections against a given endpoint using a given operation collection prefix. By default, it uses all collections",
    details: `
        Executes one or more operation collections against a given endpoint using an optionally given operation collection prefix pulled from Apollo Studio. 
        If the '--graphref' and/or '--key' flags are omitted, it will instead use the APOLLO_GRAPH_REF and APOLLO_KEY environment variables respectively.  
        `,
    examples: [
      [
        "Using environment variables, run a test against a localhost server",
        "$0 test --endpoint http://localhost:4000/graphql",
      ],
      [
        "Using a specific prefix for the operation collections",
        "$0 test --endpoint http://localhost:4000/graphql --prefix integration_tests:",
      ],
    ],
  });

  // @TODO should be required but that breaks the help command
  endpoint = Option.String("--endpoint", { required: false });

  collectionPrefix = Option.String("--prefix", { required: false });
  graphRef = Option.String("--graphref", { required: false });
  apiKey = Option.String("--key", { required: false });

  async execute(): Promise<number | void> {
    if (!this.endpoint) {
      this.context.stderr.write("Missing --endpoint\n");
      return 1;
    } else {
      try {
        /* eslint-disable no-new */
        new URL(this.endpoint);
      } catch (e) {
        this.context.stderr.write(`Invalid --endpoint provided. Error: ${e}\n`);
        return 1;
      }
    }
    this.apiKey = this.apiKey ? this.apiKey : this.context.env.APOLLO_KEY;
    if (!this.apiKey) {
      this.context.stderr.write(
        "No APOLLO_KEY provided; either use the flag or environment variable\n"
      );
      return 1;
    }

    this.graphRef = this.graphRef
      ? this.graphRef
      : this.context.env.APOLLO_GRAPH_REF;
    if (!this.graphRef) {
      this.context.stderr.write(
        "No APOLLO_GRAPH_REF provided; either use the flag or environment variable\n"
      );
      return 1;
    }

    const prefix = this.collectionPrefix ? this.collectionPrefix : "";

    const { data, error } = await getApolloClient(this.apiKey, {
      useSudo: true,
    })
      .query(OperationCollectionsDocument, { graphRef: this.graphRef })
      .toPromise();
    if (error) {
      this.context.stderr.write(
        `Error fetching operation collection with error: ${error.message}\n`
      );
      return 1;
    }

    let testCollection: Array<any> = [];

    if (data?.variant?.__typename === "GraphVariant") {
      testCollection = data.variant.operationCollections.filter((v) => {
        return v.name.startsWith(prefix);
      });
    }

    if (testCollection.length === 0) {
      this.context.stderr.write(
        `No valid operation collection found with prefix: ${prefix}\n`
      );
      return 1;
    }

    const client = getTestClient(this.endpoint ? this.endpoint : "");
    let didFail = false; // track fail state to either return 0 or 1 status codes

    testCollection.forEach(async (v: OperationCollection) => {
      const operationPromises = v.operations.map((w) => {
        return new Promise((resolve, reject) => {
          let variables = {};
          try {
            variables = JSON.parse(
              w.currentOperationRevision.variables
                ? w.currentOperationRevision.variables
                : ""
            );
          } catch (error) {
            reject(
              new Error(
                `❌  ${v.name}.${w.name} failed; Parsing variables: ${w.currentOperationRevision.variables}\nErrored with error: ${error}`
              )
            );
          }

          client
            .query(w.currentOperationRevision.body, { ...variables })
            .toPromise()
            .then((_) => {
              resolve(`✅ ${v.name}.${w.name} passed`);
            })
            .catch((error) => {
              reject(
                new Error(
                  `❌: ${v.name}.${w.name} failed; Request error with error: ${error}`
                )
              );
            });
        });
      });

      const resp = await Promise.allSettled(operationPromises);
      resp.forEach((v) => {
        if (v.status === "fulfilled") {
          this.context.stdout.write(v.value + "\n");
        } else if (v.status === "rejected") {
          didFail = true;
          this.context.stderr.write(v.reason + "\n");
        }
      });
    });

    return didFail ? 1 : 0;
  }
}
