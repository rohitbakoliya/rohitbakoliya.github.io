import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    .orbit-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10%;

        height: 50px;
        width: 50px;
        border-radius: 50%;
        perspective: 800px;
    }

    .orbit-spinner .orbit {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .orbit-spinner .orbit:nth-child(1) {
        left: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
        border-bottom: 3px solid ${props => props.theme.primaryColor};
    }

    .orbit-spinner .orbit:nth-child(2) {
        right: 0%;
        top: 0%;
        animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
        border-right: 3px solid ${props => props.theme.primaryColor};
    }

    .orbit-spinner .orbit:nth-child(3) {
        right: 0%;
        bottom: 0%;
        animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
        border-top: 3px solid ${props => props.theme.primaryColor};
    }

    @keyframes orbit-spinner-orbit-one-animation {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }

    @keyframes orbit-spinner-orbit-two-animation {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }

    @keyframes orbit-spinner-orbit-three-animation {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
`;

const Loader = () => (
    <LoaderWrapper>
        <div className="orbit-spinner">
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
        </div>
    </LoaderWrapper>
);

export default Loader;
