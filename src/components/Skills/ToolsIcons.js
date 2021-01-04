import React from 'react';

import {
    Adobeillustrator,
    Npm,
    Yarn,
    Webpack,
    Babel,
    Eslint,
    Git,
    // Cypress,
    // Jest,
    Visualstudiocode,
} from '@icons-pack/react-simple-icons';
import { SkillsIconsWrapper } from './Skills.style';

const ToolsIcons = () => (
    <SkillsIconsWrapper>
        <Visualstudiocode />
        <Git />
        <Npm />
        <Yarn />
        <Webpack />
        <Babel />
        <Eslint />
        {/* <Cypress /> */}
        {/* <Jest /> */}
        <Adobeillustrator />
    </SkillsIconsWrapper>
);

export default ToolsIcons;
