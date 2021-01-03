import React from 'react';

import logo from '../../../static/logo-white.svg';
import { FooterContent, FooterWrapper } from './Footer.style';
import { quickLinks } from '../../../../config/SiteConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <img width="35px" src={logo} alt="rohit bakoliya" />
            <p>
                Made with <FontAwesomeIcon icon="heart" /> and
                <a href="https://gatsbyjs.org" target="__blank">
                    &nbsp;gatsby&nbsp;
                </a>
                by
                <a href={quickLinks.github} target="__blank">
                    &nbsp;me
                </a>
            </p>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
