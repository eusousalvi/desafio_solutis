import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.mobile ? 'center' : 'space-evenly')};
  ${(props) => (props.mobile ? '' : 'padding: 0 5%;')}
  align-items: center;
  height: var(--fixed-height);
  background: var(--white);
  box-shadow: var(--header-shadow);
  position: fixed;
  z-index: 999;
`;

export const HomeLink = styled(Link)`
  display: flex;
`;
