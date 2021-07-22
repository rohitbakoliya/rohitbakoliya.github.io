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
                Hello! I'm Rohit, a final year student at NIT Surat majoring in Computer Engineering. I'm a passionate
                software engineer, having proficiency in modern web and mobile technologies to build highly responsive,
                robust, and scalable applications. I specialize in MERN stack.
                <br />
                <br />
                My area of interest includes, but not limited to: Design Patterns, JavaScript, React.js, API Design,
                Microservices, AWS, SQL and NoSQL Databases
            </p>
        </AboutInfo>
    </AboutWrapper>
);

export default About;
