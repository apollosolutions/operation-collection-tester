# operation-collection-tester

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

## Usage

### Requirements

- User API key (created in [Personal Settings](https://studio.apollographql.com/user-settings/api-keys)), not a graph API key
- Graph schema within Apollo Studio and an [Operation Collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/) configured
- Connection to Apollo Studio from running machine

### Basic Usage

By default, the tool will use all operation collections within an account, executing only the queries.

```sh
npx github:@apollosolutions/operation-collection-tester test --endpoint http://localhost:4000/graphql
```

If you would like to instead pull a subset of collections, you can optionally pass the `--prefix` to pull a subset of operation collections. This can be leveraged to test specific subgraphs, as needed.

```sh
npx github:@apollosolutions/operation-collection-tester test --endpoint http://localhost:4000/graphql --prefix "test:"
```

If you would like to allow use of mutations within the operation collection(s), you can optionally pass the `--mutations` flag to enable them. This will use the variables set within the operation collection, and as such, should be treated with care to avoid creation of data that isn't cleaned up or affects users.

```sh
npx github:@apollosolutions/operation-collection-tester test --endpoint http://localhost:4000/graphql --mutations
```

## Known Limitations

- Published only as source code to Github. Not available on NPM.
