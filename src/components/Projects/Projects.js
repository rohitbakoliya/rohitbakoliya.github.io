import React from 'react';
import styled from 'styled-components';
import PageHeader from '../common/PageHeader';
import MoreButton from '../common/MoreButton';
import PinnedProjects from './PinnedProjects';
import SmallProjects from './SmallProjects';

const ProjectsWrapper = styled.section`
    ${props => props.theme.spacing.sectionBottom};
`;

const ViewAllButtonWrapper = styled.div`
    margin-top: -50px;
`;

const Projects = () => (
    <ProjectsWrapper id="projects">
        <PageHeader>My Projects</PageHeader>
        <PinnedProjects />
        <ViewAllButtonWrapper>
            <MoreButton text="View All" link="/projects" />
        </ViewAllButtonWrapper>
        <SmallProjects />
    </ProjectsWrapper>
);

export default Projects;
