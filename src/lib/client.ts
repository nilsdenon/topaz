import {
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
  ApolloClient,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
});

/**
 * The WordPress connector for Apollo Client.
 *
 * @see https://www.npmjs.com/package/apollo-client
 */
const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
