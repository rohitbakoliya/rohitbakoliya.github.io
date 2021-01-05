import React from 'react';
import PageHeader from '../common/PageHeader';
import SubHeading from '../common/SubHeading';
import { SkillsWrapper } from './Skills.style';
import SkillsIcons from './SkillsIcons';
import ToolsIcons from './ToolsIcons';

const Skills = () => {
    return (
        <SkillsWrapper id="skills">
            <PageHeader>My Skillsets</PageHeader>
            <SubHeading>Tech Stacks</SubHeading>
            <SkillsIcons />
            <SubHeading>Other Tools</SubHeading>
            <ToolsIcons />
        </SkillsWrapper>
    );
};

export default Skills;
