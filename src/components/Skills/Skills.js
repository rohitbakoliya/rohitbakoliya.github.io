import React from 'react';
import PageHeader from '../common/PageHeader';
import SubHeading from '../common/SubHeading';
import { SkillsWrapper, SkillsContent } from './Skills.style';
import SkillsIcons from './SkillsIcons';
import ToolsIcons from './ToolsIcons';

const Skills = () => {
    return (
        <SkillsWrapper id="skills">
            <PageHeader>My Skillsets</PageHeader>
            <SkillsContent>
                <div className="skills__content"></div>
                <SubHeading>Tech Stacks</SubHeading>
                <SkillsIcons />
                <SubHeading>Other Tools</SubHeading>
                <ToolsIcons />
            </SkillsContent>
            <SkillsContent></SkillsContent>
            <SkillsContent></SkillsContent>
        </SkillsWrapper>
    );
};

export default Skills;
