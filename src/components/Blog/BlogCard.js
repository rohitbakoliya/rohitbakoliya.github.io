import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TagBreadcrumb } from './Tags';
import slugify from '../Utils/slugify';

const BlogWrapper = styled.article`
    overflow: auto;
    margin-bottom: 70px;
    /* margin-top: 100px; */
    padding: 30px 30px;
    border-top: 5px solid ${p => (p.theme.dark ? p.theme.accentColor : p.theme.primaryColor)};
    border-radius: 10px;
    box-shadow: ${p => p.theme.shadowSmall};
    background-color: ${p => p.theme.secondaryColor};

    &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }

    span {
        font-size: 13px;
        color: gray;
    }
`;

export const BlogDateAndReadTime = ({ date, readtime }) => (
    <span>
        <span aria-label={`publish date ${date}`}>
            <FontAwesomeIcon color="gray" icon="calendar-alt" />
            &nbsp;&nbsp;{date}
        </span>
        &nbsp;&nbsp;&nbsp;
        <span aria-label={`${readtime} minutes read`}>
            <FontAwesomeIcon color="gray" icon="clock" />
            &nbsp;&nbsp;{readtime} min read
        </span>
    </span>
);

const BlogCard = ({ date, readtime, title, excerpt, slug, tags }) => {
    return (
        <BlogWrapper>
            <BlogDateAndReadTime date={date} readtime={readtime} />
            <Link to={slug} aria-label={`${title} - read time ${readtime} minutes`}>
                <h2>{title}</h2>
            </Link>
            <p>{excerpt}</p>
            <div style={{ marginTop: 20 }}>
                {tags.map((tag, idx) => (
                    <TagBreadcrumb key={idx} aria-label={`${tag} tag`} to={`/blogs?tags=${slugify(tag)}/`}>
                        {tag}
                    </TagBreadcrumb>
                ))}
            </div>
        </BlogWrapper>
    );
};

BlogDateAndReadTime.propTypes = {
    date: PropTypes.string.isRequired,
    readtime: PropTypes.number.isRequired,
};

BlogCard.propTypes = {
    date: PropTypes.string.isRequired,
    readtime: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
};

export default BlogCard;
