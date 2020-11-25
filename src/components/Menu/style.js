import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  ${(props) => (props.mobile.active ? 'width: 100%;' : '')}
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.mobile.active ? 'space-around' : 'center'};
`;
export const MenuItem = styled(NavLink)`
  position: relative;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--red);
  border-radius: 50%;
  padding: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: -0.3rem;
  right: 0;
  color: var(--white);
  font-weight: bold;
`;
