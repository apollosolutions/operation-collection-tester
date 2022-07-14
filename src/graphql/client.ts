import { Client, createClient } from "@urql/core";
import fetch from "make-fetch-happen";

export type ApolloPlatformClientOpts = {
  apiToken: string;
};

export const getApolloClient = (
  key: string,
  { useSudo }: { useSudo: boolean }
): Client => {
  return createClient({
    // @ts-ignore - types don't match but it doesn't matter at runtime
    fetch,
    url: "https://api.apollographql.com/graphql",
    fetchOptions() {
      return {
        headers: {
          "x-api-key": key,
          ...(useSudo ? { "apollo-sudo": "true" } : {}),
        },
      };
    },
  });
};

export const getTestClient = (endpoint: string): Client => {
  return createClient({
    // @ts-ignore - types don't match but it doesn't matter at runtime
    fetch,
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
