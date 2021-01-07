import React from 'react';
import styled from 'styled-components';
import PageHeader from '../common/PageHeader';
import MajorProjects from './MajorProjects';
import SmallProjects from './SmallProjects';

const ProjectsWrapper = styled.section`
    ${props => props.theme.sectionBottom}
`;
const Projects = () => (
    <ProjectsWrapper id="projects">
        <PageHeader>My Projects</PageHeader>
        <MajorProjects />
        <SmallProjects />
    </ProjectsWrapper>
);

export default Projects;
