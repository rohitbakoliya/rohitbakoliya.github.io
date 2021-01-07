import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import FluidImg from './FluidImg';
import Loader from './Loader';

export const IFrameWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background-color: ${props => props.theme.accentColor};
    border-radius: 10px;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
    ${props =>
        props.livedemo &&
        css`
            padding-top: 56.25%;
        `}
`;

const IFrame = ({ src, livedemo }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const handleLoaded = () => {
        setIsLoading(false);
    };
    return (
        <IFrameWrapper livedemo={livedemo} ref={ref}>
            {livedemo ? (
                <>
                    <iframe
                        title={src}
                        style={{ opacity: isLoading ? '0' : '1' }}
                        src={inView ? src : undefined}
                        onLoad={handleLoaded}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope"
                        allowFullScreen
                    ></iframe>
                    {isLoading && <Loader />}
                </>
            ) : (
                <FluidImg src={src} />
            )}
        </IFrameWrapper>
    );
};

IFrame.defaultProps = {
    livedemo: false,
};
IFrame.propTypes = {
    src: PropTypes.string.isRequired,
    livedemo: PropTypes.bool,
};

export default IFrame;
