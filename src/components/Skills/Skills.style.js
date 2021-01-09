import styled, { css } from 'styled-components';

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
            &:before {
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
        padding: 15px 40px;
        font-weight: bold;
        transform: translateX(-50%);
    }
    max-height: ${p => (p.showAll ? '100%' : p.collapseHeight)};
`;
