import styled from 'styled-components';

export const SmallProjectsWrapper = styled.section`
    ${props => props.theme.spacing.sectionBottom}
    ${props => props.theme.spacing.sectionTop}
    width: 100%;
    height: 100%;
    .slick-slide {
        padding: 10px;
    }
`;

export const BG = styled.div`
    position: absolute;
    background: ${p => (p.theme.dark ? p.theme.secondaryColor : p.theme.gradient)};
    transform: skewY(-3deg);
    right: 0;
    left: 0;
    width: 100%;
    min-height: 630px;
    max-height: 740px;
`;

export const InnerContent = styled.div`
    padding: 170px 0;
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
`;

export const SmallProjectCard = styled.div`
    outline: none;
    background-color: ${props => props.theme.bg};
    border-radius: 15px;
    padding: 30px;
    height: 250px;
    h3 {
        margin-bottom: 5px;
    }
    p {
        font-size: 14px;
    }
    .smallproject__links {
        display: flex;
        align-items: center;
        margin: 10px 0;
        a {
            margin-right: 10px;
        }
        position: absolute;
        bottom: 20px;
    }
`;
