import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";

//local state
const typeDefs = {};
const cache = new InMemoryCache();
const resolvers = {};
const queries = {
  lang: gql`
    {
      lang @client
    }
  `,
  home: gql`
    query {
      homeSection {
        description
        en {
          title
          title2
          subtitle
          portrait {
            url
          }
          background_overlay {
            url
          }
          background_overlay_opacity
        }
      }
    }
  `,
};

cache.writeData({
  data: {
    lang: "en",
  },
});

export { cache, typeDefs, resolvers, queries };
