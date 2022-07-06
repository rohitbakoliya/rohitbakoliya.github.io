import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from '../components/Blog/BlogCard';
import SEO from '../components/SEO/SEO';
import BlogLayout from '../components/Blog/BlogLayout';
import useFilterQuery from '../hooks/useFilterQuery';

const BlogsPage = () => {
    const { activeTags } = useFilterQuery();
    const [blogPosts, setBlogPosts] = useState([]);
    const blogPostsQuery = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    filter: { fields: { posttype: { eq: "blogs" } }, frontmatter: { hide: { ne: true } } }
                    sort: { fields: frontmatter___date, order: DESC }
                ) {
                    edges {
                        node {
                            id
                            excerpt
                            timeToRead
                            frontmatter {
                                title
                                date(formatString: "MMMM DD, YYYY", locale: "en")
                                tags
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
    );

    useEffect(() => {
        if (activeTags.size !== 0) {
            const blogs = blogPostsQuery?.allMarkdownRemark?.edges.filter(({ node }) => {
                let keep = false;
                const tags = node.frontmatter.tags;
                tags.forEach(tag => (keep |= activeTags.has(tag)));
                return keep;
            });
            setBlogPosts(blogs);
        } else {
            const blogs = blogPostsQuery?.allMarkdownRemark?.edges;
            setBlogPosts(blogs);
        }
    }, [activeTags, blogPostsQuery?.allMarkdownRemark?.edges]);

    return (
        <Layout>
            <SEO title="Blogs | Rohit Bakoliya" />

            <BlogLayout>
                {blogPosts?.map(({ node }) => (
                    <BlogCard
                        key={node.id}
                        slug={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        tags={node.frontmatter.tags}
                        readtime={node.timeToRead}
                        excerpt={node.excerpt}
                    />
                ))}
            </BlogLayout>
        </Layout>
    );
};

export default BlogsPage;
