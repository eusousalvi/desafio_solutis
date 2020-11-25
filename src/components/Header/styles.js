import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--fixed-height);
  background: var(--white);
  box-shadow: var(--shadow);
  position: fixed;
  z-index: 999;
`;
