import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: var(--purple);
  border-radius: var(--radius);
  color: var(--white);
  font-weight: 700;
  font-size: ${(props) => props.font};
  padding: 0.3125rem 0.625rem;
  outline: none;
  border: none;
  margin-top: var(--margin);
  cursor: pointer;
`;
