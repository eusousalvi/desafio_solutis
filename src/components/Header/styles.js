import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.mobile.active ? 'center' : 'space-evenly'};
  ${(props) => (props.mobile.active ? '' : 'padding: 0 5%;')}
  align-items: center;
  height: var(--fixed-height);
  background: var(--white);
  box-shadow: var(--header-shadow);
  position: fixed;
  z-index: 999;
`;
