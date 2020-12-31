import styled from 'styled-components';

const ToggleSwitchWrapper = styled.div`
    input[type='checkbox'] {
        height: 100%;
        width: 100%;
        visibility: visible;
    }
    .knobs,
    .layer {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .label {
        position: relative;
        top: 50%;
        width: 70px;
        height: 25px;
        overflow: hidden;
    }
    .label.switch,
    .layer {
        border-radius: 100px;
    }
    .checkbox {
        position: relative;
        width: 100% !important;
        height: 100% !important;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
        visibility: visible;
    }
    .layer {
        width: 100%;
        transition-delay: 1s;
        transition: 0.2s ease all;
        z-index: 1;
        background-color: ${p => p.theme.accentColor};
    }
    .knobs {
        z-index: 2;
    }
    .switch {
        .knobs:before {
            content: 'dark';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 42px;
            height: 7px;
            color: #fff;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            line-height: 10px;
            padding: 9px 4px;
            background-color: ${p => p.theme.primaryColor};
            border-radius: 30px;
            transition-delay: 1s;
            transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) all;
        }
        .checkbox:checked + .knobs:before {
            content: 'light';
            left: 21px;
            background-color: ${p => p.theme.primaryColor};
        }
        .knobs,
        .knobs::before,
        .layer {
            transition-delay: 1s;
            transition: 0.2s ease all;
        }
    }
`;

export default ToggleSwitchWrapper;
