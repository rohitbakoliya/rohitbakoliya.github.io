import { graphql } from 'gatsby';
import React from 'react';
import { BlogDateAndReadTime } from '../components/Blog/BlogCard';
import BlogLayout from '../components/Blog/BlogLayout';
import SocialShareSection from '../components/common/SocialShareSection';
import SEO from '../components/SEO/SEO';
import Layout from '../Layout/Layout';
import { meta as siteConfig } from '../../config/SiteConfig';

const BlogPost = ({ data }) => {
    const { title, date } = data.markdownRemark.frontmatter;
    const { timeToRead, html, excerpt } = data.markdownRemark;
    const { slug } = data.markdownRemark.fields;
    const baseSlugUrl = siteConfig.siteUrl + slug;

    return (
        <Layout>
            <SEO isBlogPost title={title} description={excerpt} slug={slug} />
            <BlogLayout
                sideContent={
                    <>
                        <h4>Share on</h4>
                        <SocialShareSection title={title} url={baseSlugUrl} />
                    </>
                }
            >
                <BlogDateAndReadTime date={date} readtime={timeToRead} />
                <h1>{title}</h1>
                <article className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
            </BlogLayout>
        </Layout>
    );
};

export const query = graphql`
    query BlogPostById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            excerpt
            html
            timeToRead
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY", locale: "en")
                title
            }
        }
    }
`;

export default BlogPost;
