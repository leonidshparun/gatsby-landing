import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allContentfulClient } = useStaticQuery(
    graphql`
      query Clients {
        allContentfulClient {
          edges {
            node {
              title
              logo {
                fluid(maxWidth: 150) {
                  src
                }
                description
              }
            }
          }
        }
      }
    `
  );
  return allContentfulClient.edges;
};
