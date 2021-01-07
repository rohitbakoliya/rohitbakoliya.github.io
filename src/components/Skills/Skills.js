import React from 'react';
import IconsLib from '../common/IconsLib';
import PageHeader from '../common/PageHeader';
import SubHeading from '../common/SubHeading';
import { SkillsIconsWrapper, SkillsWrapper } from './Skills.style';

const Skills = () => {
    return (
        <SkillsWrapper id="skills">
            <PageHeader>My Skillsets</PageHeader>
            <SubHeading>Tech Stacks</SubHeading>
            <SkillsIconsWrapper>
                <IconsLib
                    Html5
                    Css3
                    Sass
                    Javascript
                    Typescript
                    ReactJs
                    Redux
                    Gatsby
                    Flutter
                    NodeDotJs
                    Graphql
                    Mysql
                    Mongodb
                    Firebase
                    Nginx
                    Docker
                    Cplusplus
                    Python
                    Dart
                    Netlify
                    Heroku
                    Digitalocean
                />
            </SkillsIconsWrapper>
            <SubHeading>Other Tools</SubHeading>
            <SkillsIconsWrapper>
                <IconsLib Visualstudiocode Adobeillustrator Npm Yarn Webpack Babel Eslint Git Prettier />
            </SkillsIconsWrapper>
        </SkillsWrapper>
    );
};

export default Skills;
