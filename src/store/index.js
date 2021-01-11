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
  skills: gql`
    query {
      skillSection {
        en {
          title
          subtitle
          comfortable_skills_title
          less_comfortable_skills_title
          need_practice_skills_title
          work_with_me_title
          work_with_me_button
          skill_set {
            title
            desc
            font_awesome_code
            comfortable_skills
            less_comfortable_skills
            need_practice_skills
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
