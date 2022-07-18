"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
const graphql_1 = require("graphql");
const graphql_2 = require("../generated/graphql");
const index_1 = require("../graphql/index");
class TestCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        // @TODO should be required but that breaks the help command
        this.endpoint = clipanion_1.Option.String('--endpoint', { required: false });
        this.collectionPrefix = clipanion_1.Option.String('--prefix', { required: false });
        this.graphRef = clipanion_1.Option.String('--graphref', { required: false });
        this.apiKey = clipanion_1.Option.String('--key', { required: false });
        this.account = clipanion_1.Option.String('--account', { required: false, hidden: true });
        this.mutations = clipanion_1.Option.Boolean('--mutations', { required: false });
    }
    execute() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.endpoint) {
                this.context.stderr.write('Missing --endpoint\n');
                return 1;
            }
            // attempt to parse the URL; fail if invalid.
            // avoids making a request to Studio by doing it frontloaded
            try {
                /* eslint-disable no-new */
                new URL(this.endpoint);
            }
            catch (e) {
                this.context.stderr.write(`Invalid --endpoint provided. Error: ${e}\n`);
                return 1;
            }
            this.apiKey = this.apiKey ? this.apiKey : this.context.env.APOLLO_KEY;
            if (!this.apiKey) {
                this.context.stderr.write('No APOLLO_KEY provided; either use the flag or environment variable\n');
                return 1;
            }
            this.graphRef = this.graphRef
                ? this.graphRef
                : this.context.env.APOLLO_GRAPH_REF;
            if (!this.graphRef) {
                this.context.stderr.write('No APOLLO_GRAPH_REF provided; either use the flag or environment variable\n');
                return 1;
            }
            const prefix = this.collectionPrefix ? this.collectionPrefix : '';
            let data;
            try {
                data = yield (0, index_1.getApolloClient)(this.apiKey, {
                    useSudo: !!this.account,
                }).request(graphql_2.OperationCollectionsDocument, { graphRef: this.graphRef });
            }
            catch (e) {
                this.context.stderr.write(`Error fetching operation collection with error: ${e}\n`);
                return 1;
            }
            let testCollection = [];
            if (((_a = data === null || data === void 0 ? void 0 : data.variant) === null || _a === void 0 ? void 0 : _a.__typename) === 'GraphVariant') {
                testCollection = data.variant.operationCollections.filter((v) => v.name.startsWith(prefix));
            }
            if (testCollection.length === 0) {
                this.context.stderr.write(`No valid operation collection found with prefix: ${prefix}\n`);
                return 1;
            }
            const client = (0, index_1.getTestClient)(this.endpoint ? this.endpoint : '');
            let didFail = false; // track fail state to either return 0 or 1 status codes
            testCollection.forEach((oc) => __awaiter(this, void 0, void 0, function* () {
                const operationPromises = oc.operations.map((operation) => new Promise((resolve, reject) => {
                    // check for mutations and if not enabled, skip and resolve.
                    const documents = (0, graphql_1.parse)(operation.currentOperationRevision.body);
                    for (const document of documents.definitions) {
                        if (document.kind === 'OperationDefinition' &&
                            document.operation === 'mutation' &&
                            !this.mutations) {
                            resolve(`⚠️ ${oc.name}.${operation.name} no-op. Mutations are not enabled. Please enable them with the --mutations flag.`);
                        }
                    }
                    let variables = {};
                    try {
                        variables = JSON.parse(operation.currentOperationRevision.variables
                            ? operation.currentOperationRevision.variables
                            : '{}');
                    }
                    catch (error) {
                        reject(new Error(`❌  ${oc.name}.${operation.name} failed; Parsing variables: ${operation.currentOperationRevision.variables}\nErrored with error: ${error}`));
                    }
                    client
                        .request(operation.currentOperationRevision.body, Object.assign({}, variables))
                        .then(() => {
                        resolve(`✅ ${oc.name}.${operation.name} passed`);
                    })
                        .catch((error) => {
                        reject(new Error(`❌: ${oc.name}.${operation.name} failed; Request error with error: ${error}`));
                    });
                }));
                const resp = yield Promise.allSettled(operationPromises);
                resp.forEach((promise) => {
                    if (promise.status === 'fulfilled') {
                        this.context.stdout.write(`${promise.value}\n'`);
                    }
                    else if (promise.status === 'rejected') {
                        didFail = true;
                        const error = promise.reason;
                        this.context.stderr.write(`${error.message}\n`);
                    }
                });
            }));
            return didFail ? 1 : 0;
        });
    }
}
exports.default = TestCommand;
TestCommand.paths = [['test'], clipanion_1.Command.Default];
TestCommand.usage = clipanion_1.Command.Usage({
    category: 'Test',
    description: 'Executes one or more operation collections against a given endpoint using a given operation collection prefix. By default, it uses all collections',
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
