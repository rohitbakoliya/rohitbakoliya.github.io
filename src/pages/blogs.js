import React from 'react';
import Layout from '../Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from '../components/Blog/BlogCard';
import SEO from '../components/SEO/SEO';
import BlogLayout from '../components/Blog/BlogLayout';

const BlogsPage = () => {
    // TODO: implement blog post filter by tags
    // const [activeTags, setActiveTags] = useState(new Set());

    const blogPosts = useStaticQuery(
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
    return (
        <Layout>
            <SEO title="Blogs | Rohit Bakoliya" />

            <BlogLayout>
                {blogPosts &&
                    blogPosts.allMarkdownRemark.edges.map(({ node }) => (
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
