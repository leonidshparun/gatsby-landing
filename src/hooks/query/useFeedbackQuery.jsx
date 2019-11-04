import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allContentfulFeedback } = useStaticQuery(
    graphql`
      query Feedback {
        allContentfulFeedback {
          edges {
            node {
              company
              text {
                content {
                  content {
                    value
                  }
                }
                text
              }
              person {
                image {
                  fixed {
                    src
                  }
                }
                name
                position
                company {
                  logo {
                    fixed {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return allContentfulFeedback.edges;
};
