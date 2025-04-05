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
                <p>
                    Hey there! I'm a backend engineer at{' '}
                    <a href="https://bloomberg.com" target="__blank">
                        Bloomberg
                    </a>{' '}
                    (since 2022), deeply passionate about building <strong>scalable</strong>,{' '}
                    <strong>low-latency systems</strong> with clean architecture and solid infrastructure. I work
                    primarily with <strong>C++, Python, Go and JavaScript</strong> — and have a soft spot for{' '}
                    <strong>distributed systems</strong> and <strong>databases</strong>.{' '}
                </p>
                <br />
                <p>
                    Beyond tech, I'm into coffee, music, photography, traveling, hiking, chess, and the gym life. I
                    believe good code and good coffee are both crafted with care.{' '}
                </p>
                <br />
                <p>
                    <strong>Always open to backend engineering, infrastructure</strong>, or
                    <strong> Gen AI/LLM-focused</strong> roles.
                </p>
                <br />
                <p>
                    <span role="img" aria-label="envelope with arrow">
                        📬
                    </span>{' '}
                    Let's connect — or better yet, let's build something cool together!
                </p>
            </p>
        </AboutInfo>
    </AboutWrapper>
);

export default About;
