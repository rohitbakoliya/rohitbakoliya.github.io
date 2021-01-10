import styled from 'styled-components';

export const NavMobileWrapper = styled.div`
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    .nav:before,
    .nav:after {
        content: '';
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #c7d0ff;
        border-bottom-left-radius: 200%;
        z-index: -1;
        -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
            -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
        -webkit-transform: translateX(100%) translateY(-100%);
        transform: translateX(100%) translateY(-100%);
    }
    .nav:after {
        background: ${props => props.theme.gradient};
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }
    .nav:before {
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }
    .nav__content {
        position: fixed;
        visibility: hidden;
        top: 50%;
        margin-top: 20px;
        -webkit-transform: translate(0%, -50%);
        transform: translate(0%, -50%);
        width: 100%;
    }
    .nav__list {
        position: relative;
        padding: 0;
        margin: 0;
        z-index: 50;
        flex-direction: column;
        /* width: max-content;
        left: 50%;
        transform: translateX(-50%); */
        li {
            /* width: 100%;
            text-align: start; */
            margin: 0;
            padding: 10px;
            -webkit-transition-delay: 0.8s;
            transition-delay: 0.8s;
            overflow: hidden;
            -webkit-transform: translate(100px, 0%);
            transform: translate(100px, 0%);
            opacity: 0;
            -webkit-transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
            transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
            transition: opacity 0.2s ease, transform 0.3s ease;
            transition: opacity 0.2s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
        }
        a {
            color: white;
        }
        a:hover {
            color: #383838;
        }
    }

    &.active {
        .nav {
            visibility: visible;
        }
        .nav__content {
            visibility: visible;
        }
        .nav:before,
        .nav:after {
            -webkit-transform: translateX(0%) translateY(0%);
            transform: translateX(0%) translateY(0%);
            border-radius: 0;
        }
        .nav:after {
            -webkit-transition-delay: 0.1s;
            transition-delay: 0.1s;
        }
        .nav:before {
            -webkit-transition-delay: 0s;
            transition-delay: 0s;
        }
        li {
            opacity: 1;
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
            -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
            transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transition: opacity 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
            &:nth-child(0) {
                -webkit-transition-delay: 0.7s;
                transition-delay: 0.7s;
            }
            &:nth-child(1) {
                -webkit-transition-delay: 0.8s;
                transition-delay: 0.8s;
            }
            &:nth-child(2) {
                -webkit-transition-delay: 0.9s;
                transition-delay: 0.9s;
            }
            &:nth-child(3) {
                -webkit-transition-delay: 1s;
                transition-delay: 1s;
            }
            &:nth-child(4) {
                -webkit-transition-delay: 1.1s;
                transition-delay: 1.1s;
            }
            &:nth-child(5) {
                -webkit-transition-delay: 1.2s;
                transition-delay: 1.2s;
            }
            &:nth-child(6) {
                -webkit-transition-delay: 1.3s;
                transition-delay: 1.3s;
            }
            &:nth-child(7) {
                -webkit-transition-delay: 1.4s;
                transition-delay: 1.4s;
            }
            &:nth-child(8) {
                -webkit-transition-delay: 1.5s;
                transition-delay: 1.5s;
            }
        }
    }
`;

export const MenuButton = styled.button`
    position: fixed;
    right: 20px;
    top: 20px;
    width: 64px;
    height: 54px;
    z-index: 1000;
    text-align: center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background: ${props => props.theme.gradient};
    box-shadow: ${props => props.theme.shadow};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 10px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    &.active {
        background: transparent;
        box-shadow: none;
    }
`;
