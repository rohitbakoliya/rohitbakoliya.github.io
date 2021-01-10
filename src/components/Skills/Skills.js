import React, { useEffect, useState } from 'react';
import { useScreenClass } from 'react-grid-system';
import Button from '../common/Button';

import IconsLib from '../common/IconsLib';
import PageHeader from '../common/PageHeader';
import SubHeading from '../common/SubHeading';
import { SkillsIconsWrapper, SkillsWrapper } from './Skills.style';

const Skills = () => {
    const screenClass = useScreenClass();
    const [showAll, setShowAll] = useState(screenClass !== `xs`);

    useEffect(() => {
        if (screenClass === 'xs') {
            setShowAll(false);
        } else {
            setShowAll(true);
        }
    }, [screenClass]);
    return (
        <SkillsWrapper id="skills">
            <PageHeader>My Skillsets</PageHeader>
            <SubHeading>Tech Stacks</SubHeading>
            <SkillsIconsWrapper showAll={showAll} collapseHeight="450px">
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

                {!showAll && (
                    <Button onClick={() => setShowAll(true)} className="showall__button">
                        Show all
                    </Button>
                )}
            </SkillsIconsWrapper>
            {showAll && (
                <>
                    <SubHeading>Other Tools</SubHeading>
                    <SkillsIconsWrapper showAll={showAll}>
                        <IconsLib Visualstudiocode Adobeillustrator Npm Yarn Webpack Babel Eslint Git Prettier />
                    </SkillsIconsWrapper>
                </>
            )}
        </SkillsWrapper>
    );
};

export default Skills;
