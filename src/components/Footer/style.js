import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--fixed-height);
  background: var(--white);
  box-shadow: var(--footer-shadow);
  position: fixed;
  z-index: 999;
  bottom: 0;
`;
