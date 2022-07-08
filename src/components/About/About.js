import React from 'react';
import PageHeader from '../common/PageHeader';
import FluidImg from '../common/FluidImg';
import { AboutWrapper, AboutInfo, AvatarWrapper } from './About.style';
import SkewBg from '../common/SkewBg';

const About = () => (
    <AboutWrapper id="about">
        <PageHeader>About Me</PageHeader>
        <SkewBg />
        <AboutInfo>
            <div>
                <AvatarWrapper>
                    <FluidImg src="avatar.jpeg" />
                </AvatarWrapper>
            </div>
            <p>
                Hi! I'm Rohit Bakoliya, a recent graduate from NIT Surat in Computer Engineering, currently working at{' '}
                <a href="https://avalara.com" target="__blank">
                    Avalara
                </a>{' '}
                as a Software Engineer. I'm a passionate software engineer who loves building robust and scalable
                applications using modern web and mobile technologies. I also enjoy developing web apps and utility
                tools and solving real-world problems.
                <br />
                <br /> I am skilled in full-stack development and have experience with technologies and languages like
                C/C++, Java, Javascript, Typescript, React, Node.JS, Python, and Rest API design.
            </p>
        </AboutInfo>
    </AboutWrapper>
);

export default About;
