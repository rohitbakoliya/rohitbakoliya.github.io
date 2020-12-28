import React from 'react';

import logo from '../../../static/logo-white.svg';
import { FooterContent, FooterWrapper } from './Footer.style';

const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <img width="35px" src={logo} alt="rohit bakoliya" />
            <p>
                © 2020 | Made with{' '}
                <span role="img" aria-label="construction logo">
                    ❤
                </span>{' '}
                and
                <a href="https://gatsbyjs.org" target="__blank">
                    &nbsp;gatsby&nbsp;
                </a>
                by
                <a href="https://github.com/rohitbakoliya" target="__blank">
                    &nbsp;Rohit Bakoliya
                </a>
            </p>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
