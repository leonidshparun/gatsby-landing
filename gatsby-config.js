if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src', 'src/styles']
      }
    },
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
    title: 'CleverSoft'
  }
};
