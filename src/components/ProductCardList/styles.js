import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
