import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
