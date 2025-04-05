import styled, { css } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

export const SkillsWrapper = styled.section`
    ${props => props.theme.spacing.sectionBottom};
`;

export const SkillsIconsWrapper = styled.div`
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    svg {
        width: 50px;
        height: 50px;
        margin: 30px;
    }
    ${props =>
        !props.showAll &&
        css`
            &::after {
                content: '';
                width: 100%;
                height: 300px;
                position: absolute;
                border-radius: 10px;
                bottom: 0;
                background: ${p => `linear-gradient(180deg, rgba(0,0,0,0), 40%, ${p.theme.bg})`};
                z-index: 5;
                transition: 0.3s;
            }
        `}
    .showall__button {
        position: absolute;
        bottom: 50px;
        left: 50%;
        z-index: 6;
        padding: 15px 25px;
        font-weight: bold;
        transform: translateX(-50%);
    }
    max-height: ${p => (p.showAll ? '100%' : p.collapseHeight)};
`;

export const SkillsWordClouds = styled(Parallax)`
    position: relative;
    z-index: -1;

    p {
        position: absolute;
        color: ${props => props.theme.accentColor};
        z-index: -1;
        left: 0;
        right: 0;
        font-weight: 900;
        user-select: none;
    }

    @media ${props => props.theme.media.tablet} {
        display: none;
    }
`;
