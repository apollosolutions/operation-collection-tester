"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestClient = exports.getApolloClient = void 0;
const core_1 = require("@urql/core");
const make_fetch_happen_1 = __importDefault(require("make-fetch-happen"));
const getApolloClient = (key, { useSudo }) => {
    return (0, core_1.createClient)({
        // @ts-ignore - types don't match but it doesn't matter at runtime
        fetch: make_fetch_happen_1.default,
        url: "https://api.apollographql.com/graphql",
        fetchOptions() {
            return {
                headers: Object.assign({ "x-api-key": key }, (useSudo ? { "apollo-sudo": "true" } : {})),
            };
        },
    });
};
exports.getApolloClient = getApolloClient;
const getTestClient = (endpoint) => {
    return (0, core_1.createClient)({
        // @ts-ignore - types don't match but it doesn't matter at runtime
        fetch: make_fetch_happen_1.default,
        url: endpoint,
        fetchOptions() {
            return {
                headers: {
                    "user-agent": "x-apollo-test-util",
                },
            };
        },
    });
};
exports.getTestClient = getTestClient;
