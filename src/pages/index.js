import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';

const IndexPage = () => (
    <Layout>
        <SEO />
        <Home />
        <About />
        <UnderConstruction />
    </Layout>
);
export default IndexPage;
