import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialShareSection = ({ url, title }) => {
    const fbShareLink = `https://facebook.com/sharer/sharer.php?u=${url}`;
    const twShareLink = `http://twitter.com/share?text="${title}" - &url=${url}`;
    const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=rohitbakoliy portfolio`;

    return (
        <div className="blog__social-share">
            <a aria-label="share on facebook" rel="noopener norefferer" target="__blank" href={fbShareLink}>
                <FontAwesomeIcon style={{ fontSize: 24 }} icon={['fab', 'facebook-f']} />
            </a>
            <a aria-label="share on twitter" rel="noopener norefferer" target="__blank" href={twShareLink}>
                <FontAwesomeIcon style={{ fontSize: 24 }} icon={['fab', 'twitter']} />
            </a>
            <a aria-label="share on linkedin" rel="noopener norefferer" target="__blank" href={linkedInShareLink}>
                <FontAwesomeIcon style={{ fontSize: 24 }} icon={['fab', 'linkedin-in']} />
            </a>
        </div>
    );
};

SocialShareSection.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default SocialShareSection;
