import styled from 'styled-components';

export const InfoTitle = styled.h4`
    color: ${p => p.theme.primaryColor};
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    margin: 15px 0;

    ::after {
        content: '';
        border-top: 1px solid;
        margin: 0 20px 0 10px;
        flex: 1 0 20px;
    }
`;

export const ProjectWrapper = styled.section`
    ${props => props.theme.spacing.sectionTop};
    ${props => props.theme.spacing.sectionBottom};

    /*custom headings styles for project-template*/
    h1 {
        font-size: 1.8rem;
        margin-bottom: 50px;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 20px 0;
        color: ${p => p.theme.primaryColor};
    }

    li {
        margin: 5px 0;
    }
    .project__title {
        margin-bottom: 50px;
        h1 {
            margin: 0;
            line-height: 70px;
        }
        .project__links {
            margin: 0;
        }
    }

    .project__info {
        margin-bottom: 70px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @media ${p => p.theme.media.fablet} {
            grid-template-columns: 0.6fr 1fr;
        }
        @media ${p => p.theme.media.tablet} {
            grid-template-columns: 1fr;
        }
    }

    .project__iframe-container {
        width: 100%;
        margin: 10px 0;
    }
`;
