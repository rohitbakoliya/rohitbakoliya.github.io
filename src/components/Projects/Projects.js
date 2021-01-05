import React from 'react';
import PageHeader from '../common/PageHeader';
import { ProjectsWrapper } from './Projects.style';
// import MajorProjects from './MajorProjects';
import SmallProjects from './SmallProjects';

const Projects = () => (
    <ProjectsWrapper id="projects">
        <PageHeader>My Projects</PageHeader>
        {/* <MajorProjects /> */}
        <SmallProjects />
    </ProjectsWrapper>
);

export default Projects;
