import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : 'row')};
    justify-content: ${props => (props.justify ? props.justify : 'space-bewteen')};
    align-items: ${props => (props.align ? props.align : 'center')};
    flex-wrap: ${props => (props.nowrap ? 'no-wrap' : 'wrap')};
`;

export default Flex;
