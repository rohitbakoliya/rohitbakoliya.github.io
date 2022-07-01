import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import slugify from '../Utils/slugify';

export const TagBreadcrumb = styled(Link)`
    float: left;
    padding: 8px 13px;
    border: 1px solid ${p => (p.theme.dark ? p.theme.primaryColor : '#d9e0ff')};
    border-radius: 50px;
    line-height: 10px;

    margin: 5px 5px 5px 0;
    font-size: 13px;

    &:hover {
        background: ${p => (p.theme.dark ? p.theme.primaryColor : '#d9e0ff')};
        color: ${p => (p.theme.dark ? '#d9e0ff' : '#6D83F2')};
    }
`;

export const useTags = () => {
    const tags = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 2000
                filter: { fields: { posttype: { eq: "blogs" } }, frontmatter: { hide: { ne: true } } }
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    return tags;
};

const Tags = () => {
    const tags = useTags();

    return (
        <section style={{ overflow: 'auto' }}>
            {tags.allMarkdownRemark.group.map(tag => (
                <TagBreadcrumb
                    key={tag.fieldValue}
                    to={`/blogs?tags=${slugify(tag.fieldValue)}/`}
                    aria-label={`${tag.totalCount} posts tagged with ${tag.fieldValue}`}
                >
                    {tag.fieldValue}, {tag.totalCount}
                </TagBreadcrumb>
            ))}
        </section>
    );
};

export default Tags;
