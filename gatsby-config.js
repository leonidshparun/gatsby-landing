require('dotenv').config();

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
        spaceId: 'xfb2t6xtkjq1',
        accessToken: 'ijN2i2YO2F8-NXzYxdQ9wD4Th8nhP_kju5Af5_pWSj0'
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
