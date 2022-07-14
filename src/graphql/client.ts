import { GraphQLClient } from 'graphql-request';

export type ApolloPlatformClientOpts = {
  apiToken: string;
};

export const getApolloClient = (
  key: string,
  { useSudo }: { useSudo: boolean },
): GraphQLClient =>
  new GraphQLClient('https://api.apollographql.com/graphql', {
    headers: {
      'x-api-key': key,
      ...(useSudo ? { 'apollo-sudo': 'true' } : {}),
    },
  });

export const getTestClient = (endpoint: string): GraphQLClient =>
  new GraphQLClient(endpoint, {
    headers: {
      'user-agent': 'x-apollo-test-util',
    },
  });
