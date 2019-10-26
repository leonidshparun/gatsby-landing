/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: ['gatsby-plugin-root-import'],
  siteMetadata: {
    title: 'Gatsby Landing Page',
    menuLinks: [
      {
        name: 'main',
        link: '/'
      },
      {
        name: 'projects',
        link: '/projects'
      },
      {
        name: 'team',
        link: '/team'
      },
      {
        name: 'about-us',
        link: '/about-us'
      }
    ]
  }
};
