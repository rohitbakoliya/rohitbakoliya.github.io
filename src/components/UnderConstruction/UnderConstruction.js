import React from 'react';
import PropTypes from 'prop-types';
import UCStyle from './UnderConstruction.style';
import { quickLinks } from '../../../config/SiteConfig';

import UcCoffee from '../../static/lottie/under_construction';
import DisplayLottie from '../common/DisplayLottie';

const UnderConstruction = ({ page }) => (
    <UCStyle>
        <div className="UC__text">
            <h1>Oops!</h1>
            <h2> &lt;{page} &#x2215;&gt; Under Construction</h2>
            <p>I'm currently working on this page and will be back up soon.</p>
            <p>
                While you are waiting, why don't you check out my{' '}
                <a target="__black" href={quickLinks.github}>
                    Github
                </a>{' '}
                profile.
            </p>
        </div>
        <div className="lottie">
            <DisplayLottie animationData={UcCoffee} />
        </div>
    </UCStyle>
);

UnderConstruction.defaultProps = {
    page: 'Site',
};
UnderConstruction.propTypes = {
    page: PropTypes.string,
};
export default UnderConstruction;
