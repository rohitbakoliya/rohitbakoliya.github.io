import React from 'react';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
    <Layout>
        <SEO />
        <Home />
        <center>
            {' '}
            <span role="img" aria-label="construction logo">
                🚧
            </span>{' '}
            Under Construction
        </center>
    </Layout>
);
export default IndexPage;
