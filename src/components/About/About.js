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
                Hello! I'm Rohit, a computer engineering undergrad currently studying at Sardar Vallabhbhai National
                Institute of Technology, Surat. Currently doing an internship at{' '}
                <a href="http://schedule-x.com/" target="__blank">
                    schedule-x
                </a>{' '}
                as a frontend engineer.
                <br />
                <br />
                An enthusiastic software engineer working on modern web and mobile technologies to build powerful
                applications with writing clean, efficient and modular code. I am especially focusing on Reactjs.
                <br />
                <br />
                I'm also a good problem solver and competitive coder, have a good understanding of Data Structures and
                various Algorithms.
            </p>
        </AboutInfo>
    </AboutWrapper>
);

export default About;
