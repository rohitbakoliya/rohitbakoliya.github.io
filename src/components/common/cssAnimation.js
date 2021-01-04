import { keyframes } from 'styled-components';

export const slideDownKeyframe = keyframes`
    0% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0);
    }
`;
