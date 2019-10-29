if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  plugins: [
    'gatsby-plugin-root-import',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
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
