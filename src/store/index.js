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
        en {
          title
          title2
          subtitle
          portrait {
            image {
              url
            }
            opacity
          }
          background_overlay {
            image {
              url
            }
            opacity
          }
        }
      }
    }
  `,
  about: gql`
    query {
      aboutSection {
        en {
          title
          subtitle
          articles {
            title
            subtitle
            content
          }
        }
      }
    }
  `,
  hobbies: gql`
    query {
      hobbiesSection {
        en {
          title
          hobbies {
            title
            font_awesome_code
          }
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
