import styled from 'styled-components';

const UCStyle = styled.div`
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .UC__text {
        width: fit-content;
        h1 {
            font-size: 2.8rem;
        }
        p {
            font-family: ${props => props.theme.fontFamily};
            margin-bottom: 7px;
        }
        @media ${props => props.theme.media.tablet} {
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
    img,
    .lottie {
        flex-grow: 0.7;
        max-width: 600px;
    }
    @media ${props => props.theme.media.fablet} {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        img,
        .lottie {
            max-width: 450px;
        }
    }
`;

export default UCStyle;
