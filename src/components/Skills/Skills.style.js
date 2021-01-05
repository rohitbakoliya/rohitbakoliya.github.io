import styled from 'styled-components';

export const SkillsWrapper = styled.section`
    ${props => props.theme.spacing.sectionBottom};
    position: relative;
    .skills__word-clouds {
        @media ${props => props.theme.media.tablet} {
            display: none;
        }

        p {
            position: absolute;
            color: ${props => props.theme.accentColor};
            z-index: -1;
            left: 0;
            right: 0;
            font-weight: 900;
        }
        z-index: -1;
    }
`;

export const SkillsIconsWrapper = styled.div`
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    svg {
        width: 50px;
        height: 50px;
        margin: 30px;
    }
`;
