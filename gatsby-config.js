module.exports = {
  plugins: ['gatsby-plugin-root-import', `gatsby-plugin-sass`],
  siteMetadata: {
    title: 'CleverSoft',
    menuLinks: [
      {
        name: 'Services',
        link: '/services'
      },
      {
        name: 'Solutions',
        link: '/solution'
      },
      {
        name: 'Industries',
        link: '/industries'
      },
      {
        name: 'Portfolio',
        link: '/portfolio'
      },
      {
        name: 'Company',
        link: '/company'
      },
      {
        name: 'Send request',
        link: '/contacts'
      }
    ]
  }
};
