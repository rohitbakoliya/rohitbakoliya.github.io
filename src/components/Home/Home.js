import React from 'react';

import { HomeWrapper, Intro } from './Home.style';
// import heroVectorBottom from '../../static/hero_vector_bottom.svg';
import heroVectorRight from '../../static/hero_vector_right.svg';
import { Button, IconButton } from '../common/Button';
import { social } from '../../../config/SiteConfig';

const Home = () => {
    return (
        <HomeWrapper id="home">
            <img className="vector-right" src={heroVectorRight} alt=""></img>
            {/* <img className="vector-bottom" src={heroVectorBottom} alt="" ></img> */}
            <Intro>
                <div className="home__text">
                    <p>Hello, I'm</p>
                    <h1>ROHIT BAKOLIYA</h1>
                    <p className="title">WEB DEVELOPER & COMPETITIVE PROGRAMMER</p>
                    <div className="home__text__cta">
                        <Button as="a" href="#">
                            Download Resume
                        </Button>
                        <div className="home__text__cta__social">
                            <IconButton label="github" icon={['fab', 'github']} href={social.github} />
                            <IconButton label="linkedIn" icon={['fab', 'linkedin-in']} href={social.linkedin} />
                            <IconButton label="facebook" icon={['fab', 'facebook-f']} href={social.facebook} />
                        </div>
                    </div>
                </div>
            </Intro>
        </HomeWrapper>
    );
};

export default Home;
