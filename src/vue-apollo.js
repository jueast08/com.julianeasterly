import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
//import gql from "graphql-tag";

import { cache, typeDefs, resolvers } from "Store";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL || "http://localhost:1337/graphql",
});

//local state
//const typeDefs = {};

// const cache = new InMemoryCache();

// cache.writeData({
//   data: {
//     isLoading: true,
//   },
// });

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

export default apolloClient;
