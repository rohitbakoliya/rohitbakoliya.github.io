import React from 'react';
import Lottie from 'react-lottie';

const DisplayLottie = props => {
    const animationData = props.animationData;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        renderer: 'svg',
        animationData: animationData,
    };

    return <Lottie isClickToPauseDisabled options={defaultOptions} />;
};

export default DisplayLottie;
