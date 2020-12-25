import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="Not Found" />
            <h1>Look like you're lost</h1>
            <p>The page you're looking for does not exist!</p>
            <Link to="/">Return Home</Link>
        </Layout>
    );
};

export default NotFoundPage;
