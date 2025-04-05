import React from 'react';

import { HomeWrapper, Intro } from './Home.style';
import heroVectorRight from '../../static/hero_vector_right.svg';
import { quickLinks } from '../../../config/SiteConfig';
import Button from '../common/Button';
import IconLink from '../common/IconLink';

const Home = () => {
    return (
        <HomeWrapper id="home">
            <img className="vector-right" src={heroVectorRight} alt=""></img>
            <Intro>
                <div className="home__text">
                    <p>Hello, I'm</p>
                    <h1>ROHIT BAKOLIYA</h1>
                    <p className="title">SOFTWARE ENGINEER</p>
                    <div className="home__text__cta">
                        <Button as="a" href={quickLinks.resume}>
                            Get My Resume
                        </Button>
                        <div className="home__text__cta__quickLinks">
                            <IconLink label="email" icon={['fab', 'google']} href={quickLinks.email} />
                            <IconLink label="linkedIn" icon={['fab', 'linkedin-in']} href={quickLinks.linkedin} />
                            <IconLink label="github" icon={['fab', 'github']} href={quickLinks.github} />
                        </div>
                    </div>
                </div>
            </Intro>
        </HomeWrapper>
    );
};

export default Home;
