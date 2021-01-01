import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import styled from 'styled-components';

import LostInSpace from '../static/lottie/404_not_found';
import DisplayLottie from '../components/common/DisplayLottie';

const NFContent = styled.section`
    height: calc(80vh - 100px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .text {
        width: fit-content;
        p {
            font-family: ${props => props.theme.fontFamily};
        }
        text-align: center;
    }
    .lottie {
        max-width: 400px;
    }
`;

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not Found" />
            <NFContent>
                <div className="lottie">
                    <DisplayLottie animationData={LostInSpace} />
                </div>
                <div className="text">
                    <h1>Look like you're lost</h1>
                    <p>The page you're looking for does not exist!</p>
                    <p>
                        <Link to="/">Return Home</Link>
                    </p>
                </div>
            </NFContent>
        </Layout>
    );
};

export default NotFoundPage;
