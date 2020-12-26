import styled from 'styled-components';
import Wrapper from '../common/Wrapper';

export const RootWrapper = styled(Wrapper)`
    margin-top: 100px;
    /* padding-top: 100px; */
    margin-bottom: 50px;
    min-height: calc(100vh - 125px);

    @media ${props => props.theme.media.tablet} {
        margin-top: 50px;
    }
`;
