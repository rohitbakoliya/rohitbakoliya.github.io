import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const FluidImg = ({ src, ...rest }) => {
    /*
    This won't work because static queries can take variables - only pages

    const { imageSharp } = useStaticQuery(
        graphql`
            query($src: String!) {
                imageSharp(fluid: { originalName: { eq: $src } }) {
                    fluid(quality: 90, maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        `
    );
    */
    const { allImageSharp } = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(quality: 90, maxWidth: 2000) {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);
    const exists = allImageSharp.edges.find(({ node }) => node.fluid.originalName.match(src));

    return exists && exists.node.fluid ? <Image fluid={exists.node.fluid} {...rest} /> : null;
};

FluidImg.propTypes = {
    src: PropTypes.string.isRequired,
};

export default FluidImg;
