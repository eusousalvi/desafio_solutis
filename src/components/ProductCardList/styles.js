import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
