"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestClient = exports.getApolloClient = void 0;
const graphql_request_1 = require("graphql-request");
const getApolloClient = (key, { useSudo }) => new graphql_request_1.GraphQLClient('https://api.apollographql.com/graphql', {
    headers: Object.assign({ 'x-api-key': key }, (useSudo ? { 'apollo-sudo': 'true' } : {})),
});
exports.getApolloClient = getApolloClient;
const getTestClient = (endpoint) => new graphql_request_1.GraphQLClient(endpoint, {
    headers: {
        'user-agent': 'x-apollo-test-util',
    },
});
exports.getTestClient = getTestClient;
