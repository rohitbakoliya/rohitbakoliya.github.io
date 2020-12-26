import styled, { css } from 'styled-components';

const Visible = styled.div`
    ${props =>
        props.moblie
            ? css`
                  @media ${props.theme.media.mobile} {
                      display: none;
                  }
              `
            : null}

    ${props =>
        props.tablet
            ? css`
                  @media ${props.theme.media.tablet} {
                      display: none;
                  }
              `
            : null}

            ${props =>
        props.fablet
            ? css`
                  @media ${props.theme.media.fablet} {
                      display: none;
                  }
              `
            : null}

            ${props =>
        props.desktop
            ? css`
                  @media ${props.theme.media.desktop} {
                      display: none;
                  }
              `
            : null}
`;

export default Visible;
