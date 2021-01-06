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
                path: `${__dirname}/content/json`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-embedder`,
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: `gatsby-remark-autolink`,
                            maintainCase: true,
                            removeAccents: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-embed-snippet`,
                        options: {
                            directory: `${__dirname}`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: true,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            showCaptions: true,
                        },
                    },
                ],
            },
        },
        //source markdown - blogs
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blogs',
                path: `${__dirname}/content/blogs`,
            },
        },
        //source markdown - major projects
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'major-projects',
                path: `${__dirname}/content/major-projects`,
            },
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
