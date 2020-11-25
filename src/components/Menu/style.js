import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  ${(props) => (props.mobile.active ? 'width: 100%;' : '')}
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.mobile.active ? 'space-around' : 'center'};
`;
export const MenuItem = styled(NavLink)``;
