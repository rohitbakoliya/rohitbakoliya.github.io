const { meta, manifest, analytics } = require('./config/SiteConfig');

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
        //source file system
        //- source JSON
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'json',
                path: './content/json'
            }
        },
        //- source markdown
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blogs',
                path: './content/blogs'
            }
        },
        //source static pages
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        //nprogress
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: manifest.theme_color,
                showSpinner: false,
            },
        },
        //others
        'gatsby-plugin-styled-components',
        'gatsby-plugin-mdx',
    ],
};
