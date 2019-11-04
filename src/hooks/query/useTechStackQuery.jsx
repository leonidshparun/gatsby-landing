import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allContentfulTechStack } = useStaticQuery(
    graphql`
      query TechStack {
        allContentfulTechStack {
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
  return allContentfulTechStack.edges;
};
