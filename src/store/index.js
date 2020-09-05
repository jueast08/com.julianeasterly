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
  experiences: gql`
    query {
      experienceSection {
        en {
          title
          subtitle
          experiences {
            logo {
              url
            }
            title
            establishment
            subtitle
            start_date_v2
            end_date_v2
            location
            content
          }
          other_experiences
          resume_button_text
          resume {
            url
          }
        }
      }
    }
  `,
  education: gql`
    query {
      educationSection {
        en {
          title
          subtitle
          education {
            logo {
              url
            }
            title
            establishment
            subtitle
            start_date
            end_date
            location
            content
          }
        }
      }
    }
  `,
  contact: gql`
    query {
      contactSection {
        en {
          title
          subtitle
          name
          email
          message
          sendbutton
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
