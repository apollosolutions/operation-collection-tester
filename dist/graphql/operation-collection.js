'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.FETCH_OPERATIONS_COLLECTION = void 0;
const core_1 = require('@urql/core');
exports.FETCH_OPERATIONS_COLLECTION = (0, core_1.gql)`
    query OperationCollections($graphRef: ID!) {
    variant(ref: $graphRef) {
        ... on GraphVariant {
        id
        name
        operationCollections {
            name
            operations {
            name
            currentOperationRevision {
                body
                variables
                headers {
                name
                value
                }
            }
            }      
        }
        }
    }
    }
`;
