import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import useFilterQuery from '../../hooks/useFilterQuery';

export const TagBreadcrumb = styled.div`
    float: left;
    padding: 8px 13px;
    border: 1px solid ${p => (p.theme.dark ? p.theme.primaryColor : '#d9e0ff')};
    border-radius: 50px;
    line-height: 10px;

    margin: 5px 5px 5px 0;
    font-size: 13px;

    ${p =>
        p.isActive
            ? css`
                  background: ${p => (p.theme.dark ? p.theme.primaryColor : '#d9e0ff')};
                  color: ${p => (p.theme.dark ? '#d9e0ff' : '#6D83F2')};
              `
            : css`
                  background-color: unset;
                  color: unset;
              `}

    &:hover {
        cursor: pointer;
        background: ${p => (p.theme.dark ? p.theme.primaryColor : '#d9e0ff')};
        color: ${p => (p.theme.dark ? '#d9e0ff' : '#6D83F2')};
    }
`;

export const useTags = () => {
    // **use this in filter to hide blogs** frontmatter: { hide: { ne: true } }

    const tags = useStaticQuery(graphql`
        query {
            allMarkdownRemark(limit: 2000, filter: { fields: { posttype: { eq: "blogs" } } }) {
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
    const { activeTags, toggleTag } = useFilterQuery();

    return (
        <section style={{ overflow: 'auto' }}>
            {tags.allMarkdownRemark.group.map(tag => (
                <TagBreadcrumb
                    key={tag.fieldValue}
                    onClick={() => toggleTag(tag.fieldValue)}
                    isActive={activeTags.has(tag.fieldValue)}
                    aria-label={`${tag.totalCount} posts tagged with ${tag.fieldValue}`}
                >
                    {tag.fieldValue}, {tag.totalCount}
                </TagBreadcrumb>
            ))}
        </section>
    );
};

export default Tags;
