import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import mainBanner from '../../static/icon.png';

const SEO = ({ title, description, slug, datePublished, isBlog }) => {
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
                    siteLogo
                    twitter
                    email
                }
            }
        }
    `);
    title = title || siteMetadata.title;
    description = description || siteMetadata.description;

    let url = `${siteMetadata.siteUrl}${slug || ''}`;
    let { twitter, email, author, siteLogo } = siteMetadata;
    let image = siteMetadata.siteUrl + mainBanner;

    const authorJSONLD = {
        '@type': 'Person',
        name: author,
        email: email,
    };

    const logoJSONLD = {
        '@type': 'ImageObject',
        url: `${url}/${siteLogo}`,
    };

    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: `${url}`,
            name: title,
        },
    ];

    if (isBlog) {
        title += ' | Rohit Bakoliya';
        //TODO: add different image, logo
        schemaOrgJSONLD.push(
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: {
                            '@id': `${siteMetadata.siteUrl}`,
                            name: title,
                            image,
                        },
                    },
                ],
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                url: url,
                name: title,
                headline: title,
                image: { '@type': 'ImageObject', url: image },
                author: authorJSONLD,
                publisher: {
                    ...authorJSONLD,
                    '@type': 'Organization',
                    logo: logoJSONLD,
                },
                datePublished,
                description,
            }
        );
    }
    return (
        <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="url" content={url} />
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* Schema.org tags */}
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

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
