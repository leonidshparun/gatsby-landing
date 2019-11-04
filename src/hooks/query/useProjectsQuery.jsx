import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query Project {
        allContentfulProject {
          edges {
            node {
              title
              image {
                fluid(maxWidth: 720) {
                  src
                }
              }
              client {
                title
                logo {
                  fluid(maxWidth: 120) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return allContentfulProject.edges;
};
