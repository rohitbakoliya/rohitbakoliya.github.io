import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';

import { SmallProjectsWrapper, BG, InnerContent, SmallProjectCard } from './SmallProjects.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button, { IconButton } from '../common/Button';

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: '40px',
    swipeToSlide: true,
    arrows: false,
    accessibility: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerPadding: '15px',
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                speed: 500,
                slidesToShow: 1,
                centerPadding: '15px',
            },
        },
    ],
};

const SmallProjects = () => {
    const { allSmallprojectsJson } = useStaticQuery(
        graphql`
            query {
                allSmallprojectsJson {
                    edges {
                        node {
                            id
                            title
                            description
                            links {
                                src
                                demo
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <SmallProjectsWrapper>
            <BG />
            <InnerContent>
                <Slider {...settings}>
                    {allSmallprojectsJson.edges.map(({ node }) => (
                        <SmallProjectCard key={node.id}>
                            <h3>{node.title}</h3>
                            <p>{node.description}</p>
                            <div className="smallproject__links">
                                <Button target="__blank" as="a" href={node.links.demo}>
                                    Live Demo
                                </Button>
                                <IconButton label="github" href={node.links.src} icon={['fab', 'github']} />
                            </div>
                        </SmallProjectCard>
                    ))}
                </Slider>
            </InnerContent>
        </SmallProjectsWrapper>
    );
};
export default SmallProjects;
