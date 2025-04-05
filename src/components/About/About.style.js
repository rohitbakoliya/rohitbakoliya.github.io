import styled from 'styled-components';

export const AboutWrapper = styled.section`
    margin-bottom: 200px;
    @media ${props => props.theme.media.tablet} {
        position: relative;
    }
`;

export const AboutInfo = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 220px;

    > div:first-child {
        margin-right: 10%;
    }
    p {
        color: #f8f8f8;
        text-align: justify;
    }
    a {
        color: ${props => (props.theme.dark ? props.theme.primaryColor : props.theme.primaryText)};
    }
    a:hover {
        color: #f8f8f8;
    }
    @media ${props => props.theme.media.tablet} {
        flex-direction: column;
        margin-top: 120px;

        > div:first-child {
            margin-right: 0;
            margin-bottom: 30px;
        }
    }
`;

export const AvatarWrapper = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 5px solid #f8f8f8;
    overflow: hidden;
    margin: 0;
    background-color: #f8f8f8;
`;
export default AboutWrapper;
