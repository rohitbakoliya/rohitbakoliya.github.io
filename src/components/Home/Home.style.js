import styled from 'styled-components';
import { slideDownKeyframe } from '../common/cssAnimation';

export const HomeWrapper = styled.section`
    .vector-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: -1;
    }
    .vector-right {
        position: absolute;
        top: 60px;
        right: 0;
        width: 30%;
        overflow: hidden;
        line-height: 0;
        z-index: -1;
    }
    @media ${props => props.theme.media.tablet} {
        margin-top: 80px;

        .vector-right {
            top: 0px;
            left: 0;
            transform: rotateY(180deg);
            opacity: 0.8;
        }
    }
`;

export const Intro = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: calc(80vh - 100px);

    animation: ${slideDownKeyframe} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

    ${props => props.theme.spacing.sectionBottom};
    z-index: 1;

    .home__text {
        h1 {
            margin: -4px 0;
            font-size: 2.5rem;
            font-weight: 800;
        }
        p {
            font-family: ${props => props.theme.fontFamily};
        }
        .title {
            font-size: 1.06rem;
            font-weight: 500;
        }
        &__cta {
            width: max-content;
            a {
                margin: 30px 0;
            }
            &__quickLinks {
                display: flex;
                justify-content: space-between;
                font-size: 24px;
            }
        }
        @media ${props => props.theme.media.tablet} {
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        @media ${props => props.theme.media.mobile} {
            h1 {
                font-size: 2.3rem;
            }
            .title {
                font-size: 16px;
            }
        }
    }

    @media ${props => props.theme.media.tablet} {
        justify-content: center;
        flex-direction: column;
    }
`;
