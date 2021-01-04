import styled from 'styled-components';

export const SkillsWrapper = styled.section``;

export const SkillsContent = styled.div``;

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
        transition: all 200ms ease-out;
    }
    /* svg:hover {
        transform: scale(1.2);
    } */
`;
