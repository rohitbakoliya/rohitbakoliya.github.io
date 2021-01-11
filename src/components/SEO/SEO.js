import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import mainBanner from '../../static/icon.png';

const SEO = ({ title, description, slug, isBlog }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    twitter
                }
            }
        }
    `);
    title = title || siteMetadata.title;
    description = description || siteMetadata.description;

    let url = `${siteMetadata.siteUrl}${slug || ''}`;
    let twitter = siteMetadata.twitter;
    let image = siteMetadata.siteUrl + mainBanner;

    if (isBlog) {
        title += ' | Rohit Bakoliya';
        //TODO: add og:image for blogs
    }
    return (
        <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="url" content={url} />
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlog ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
