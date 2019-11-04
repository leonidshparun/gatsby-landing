import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allContentfulAwards } = useStaticQuery(
    graphql`
      query Awards {
        allContentfulAwards {
          edges {
            node {
              title
              logo {
                fluid(maxWidth: 200) {
                  src
                }
              }
            }
          }
        }
      }
    `
  );
  return allContentfulAwards.edges;
};
