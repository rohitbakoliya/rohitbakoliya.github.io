import styled from 'styled-components';
import Wrapper from '../components/common/Wrapper';

export const RootWrapper = styled(Wrapper)`
    margin-top: 100px;
    /* padding-top: 100px; */
    margin-bottom: 50px;
    min-height: calc(100vh - 100px);

    @media ${props => props.theme.media.tablet} {
        margin-top: 50px;
    }
`;
