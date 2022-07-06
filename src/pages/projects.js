import React from 'react';
import MajorProjects from '../components/Projects/MajorProjects';
import SEO from '../components/SEO/SEO';

import Layout from '../Layout/Layout';

const Projects = () => {
    return (
        <Layout>
            <SEO title="Projects | Rohit Bakoliya" />
            <MajorProjects />
        </Layout>
    );
};

export default Projects;
