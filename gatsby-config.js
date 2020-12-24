const { meta, manifest, analytics } = require('./config/siteData');

module.exports = {
    siteMetadata: meta,
    plugins: [
        //google analytics
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: analytics,
        },

        //site configs
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: manifest,
        },

        //images transformer & source images
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/static/images',
            },
            __key: 'images',
        },

        //source pages
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        //others
        'gatsby-plugin-styled-components',
        'gatsby-plugin-mdx',
    ],
};
