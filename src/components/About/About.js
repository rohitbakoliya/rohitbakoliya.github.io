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
                Institute of Technology, Surat.
                <br />
                <br />
                An enthusiastic software engineer working on modern web and mobile technologies to build
                highly responsive, interactive, functional and scalable applications without losing any efficiency and
                modularity of code. I am especially focusing on the MERN stack.
                <br />
                <br />
                I'm also a good problem solver and competitive coder, have a good understanding of Data Structures and
                various Algorithms.
            </p>
        </AboutInfo>
    </AboutWrapper>
);

export default About;
