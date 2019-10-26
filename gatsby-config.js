module.exports = {
  plugins: ['gatsby-plugin-root-import', `gatsby-plugin-sass`],
  siteMetadata: {
    title: 'Clever Soft',
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
