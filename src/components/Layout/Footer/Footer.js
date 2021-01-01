import React from 'react';

import logo from '../../../static/logo-white.svg';
import { FooterContent, FooterWrapper } from './Footer.style';
import { social } from '../../../../config/SiteConfig';
const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <img width="35px" src={logo} alt="rohit bakoliya" />
            <p>
                Made with{' '}
                <span className="emoji" role="img" aria-label="construction logo">
                    ❤
                </span>{' '}
                and
                <a href="https://gatsbyjs.org" target="__blank">
                    &nbsp;gatsby&nbsp;
                </a>
                by
                <a href={social.github} target="__blank">
                    &nbsp;me
                </a>
            </p>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
