import { Command, Option } from 'clipanion';
import { parse } from 'graphql';
import {
  OperationCollection,
  OperationCollectionsDocument,
} from '../generated/graphql';
import { getApolloClient, getTestClient } from '../graphql/index';

export default class TestCommand extends Command {
  static paths = [['test'], Command.Default];

  static usage = Command.Usage({
    category: 'Test',
    description:
      'Executes one or more operation collections against a given endpoint using a given operation collection prefix. By default, it uses all collections',
    details: `
        Executes one or more operation collections against a given endpoint using an optionally given operation collection prefix pulled from Apollo Studio. 
        If the '--graphref' and/or '--key' flags are omitted, it will instead use the APOLLO_GRAPH_REF and APOLLO_KEY environment variables respectively.  
        `,
    examples: [
      [
        'Using environment variables, run a test against a localhost server',
        '$0 test --endpoint http://localhost:4000/graphql',
      ],
      [
        'Using a specific prefix for the operation collections',
        '$0 test --endpoint http://localhost:4000/graphql --prefix integration_tests:',
      ],
    ],
  });

  // @TODO should be required but that breaks the help command
  endpoint = Option.String('--endpoint', { required: false });

  collectionPrefix = Option.String('--prefix', { required: false });

  graphRef = Option.String('--graphref', { required: false });

  apiKey = Option.String('--key', { required: false });

  account = Option.String('--account', { required: false, hidden: true });

  mutations = Option.Boolean('--mutations', { required: false });

  async execute(): Promise<number | void> {
    if (!this.endpoint) {
      this.context.stderr.write('Missing --endpoint\n');
      return 1;
    }
    // attempt to parse the URL; fail if invalid.
    // avoids making a request to Studio by doing it frontloaded
    try {
      /* eslint-disable no-new */
      new URL(this.endpoint);
    } catch (e) {
      this.context.stderr.write(`Invalid --endpoint provided. Error: ${e}\n`);
      return 1;
    }

    this.apiKey = this.apiKey ? this.apiKey : this.context.env.APOLLO_KEY;
    if (!this.apiKey) {
      this.context.stderr.write(
        'No APOLLO_KEY provided; either use the flag or environment variable\n',
      );
      return 1;
    }

    this.graphRef = this.graphRef
      ? this.graphRef
      : this.context.env.APOLLO_GRAPH_REF;
    if (!this.graphRef) {
      this.context.stderr.write(
        'No APOLLO_GRAPH_REF provided; either use the flag or environment variable\n',
      );
      return 1;
    }

    const prefix = this.collectionPrefix ? this.collectionPrefix : '';
    let data;
    try {
      data = await getApolloClient(this.apiKey, {
        useSudo: !!this.account,
      }).request(OperationCollectionsDocument, { graphRef: this.graphRef });
    } catch (e) {
      this.context.stderr.write(
        `Error fetching operation collection with error: ${e}\n`,
      );
      return 1;
    }
    let testCollection: Array<any> = [];

    if (data?.variant?.__typename === 'GraphVariant') {
      testCollection = data.variant.operationCollections.filter(
        (v: OperationCollection) => v.name.startsWith(prefix),
      );
    }

    if (testCollection.length === 0) {
      this.context.stderr.write(
        `No valid operation collection found with prefix: ${prefix}\n`,
      );
      return 1;
    }

    const client = getTestClient(this.endpoint ? this.endpoint : '');
    let didFail = false; // track fail state to either return 0 or 1 status codes

    testCollection.forEach(async (oc: OperationCollection) => {
      const operationPromises = oc.operations.map(
        (operation) =>
          new Promise((resolve, reject) => {
            // check for mutations and if not enabled, skip and resolve.
            const documents = parse(operation.currentOperationRevision.body);
            for (const document of documents.definitions) {
              if (
                document.kind === 'OperationDefinition' &&
                document.operation === 'mutation' &&
                !this.mutations
              ) {
                resolve(
                  `⚠️ ${oc.name}.${operation.name} no-op. Mutations are not enabled. Please enable them with the --mutations flag.`,
                );
              }
            }

            let variables = {};
            try {
              variables = JSON.parse(
                operation.currentOperationRevision.variables
                  ? operation.currentOperationRevision.variables
                  : '{}', // currently, variables are stored as strings within the API, so need to parse out to pass to forwarding server
              );
            } catch (error) {
              reject(
                new Error(
                  `❌  ${oc.name}.${operation.name} failed; Parsing variables: ${operation.currentOperationRevision.variables}\nErrored with error: ${error}`, // provide information to debug; likely an extra comma
                ),
              );
            }

            client
              .request(operation.currentOperationRevision.body, {
                ...variables,
              })
              .then(() => {
                resolve(`✅ ${oc.name}.${operation.name} passed`);
              })
              .catch((error) => {
                reject(
                  new Error(
                    `❌: ${oc.name}.${operation.name} failed; Request error with error: ${error}`,
                  ),
                );
              });
          }),
      );

      const resp = await Promise.allSettled(operationPromises);
      resp.forEach((promise) => {
        if (promise.status === 'fulfilled') {
          this.context.stdout.write(`${promise.value}\n'`);
        } else if (promise.status === 'rejected') {
          didFail = true;
          const error: Error = promise.reason;
          this.context.stderr.write(`${error.message}\n`);
        }
      });
    });

    return didFail ? 1 : 0;
  }
}
