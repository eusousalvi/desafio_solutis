import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--fixed-height);
  background: var(--white);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.38);
  position: fixed;
  z-index: 999;
  bottom: 0;
`;
