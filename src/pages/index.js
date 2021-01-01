import React from 'react';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';

const IndexPage = () => (
    <Layout>
        <SEO />
        <Home />
        <UnderConstruction />
    </Layout>
);
export default IndexPage;
