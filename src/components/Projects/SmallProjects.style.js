import styled from 'styled-components';

export const SmallProjectsWrapper = styled.section`
    ${props => props.theme.spacing.sectionBottom};
    ${props => props.theme.spacing.sectionTop};
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
    /* increase padding to increase card-height */
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
    /* increase height to increase card-height */
    height: 250px;
    h3 {
        margin-bottom: 5px;
    }
    p {
        display: -webkit-box;
        font-size: 14px;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
