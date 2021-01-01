import React from 'react';
import PropTypes from 'prop-types';
import UCStyle from './UnderConstruction.style';
import { social } from '../../../config/SiteConfig';

import UcImg from '../../static/under_construction.svg';

const UnderConstruction = ({ page }) => (
    <UCStyle>
        <div className="UC__text">
            <h1>Oops!</h1>
            <h2> &lt;{page} &#x2215;&gt; Under Construction</h2>
            <p>I'm currently working on this page and will be back up soon.</p>
            <p>
                While you are waiting, why don't you check out my{' '}
                <a target="__black" href={social.github}>
                    Github
                </a>{' '}
                profile.
            </p>
        </div>
        <img src={UcImg} alt="" />
    </UCStyle>
);

UnderConstruction.defaultProps = {
    page: 'Site',
};
UnderConstruction.propTypes = {
    page: PropTypes.string,
};
export default UnderConstruction;
