import React from 'react';
import Layout from '../Layout/Layout';
import SEO from '../components/SEO/SEO';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const IndexPage = () => (
    <Layout>
        <SEO />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </Layout>
);
export default IndexPage;
