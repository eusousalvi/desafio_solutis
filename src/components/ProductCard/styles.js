import styled from 'styled-components';

export const Card = styled.div`
  width: 90%;
  height: 8.375rem;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
`;

export const Img = styled.img`
  width: 6.85rem;
  height: 6.85rem;
  background-color: var(--medium-gray);
  border-radius: var(--radius);
  margin: var(--margin);
`;

export const Details = styled.div`
  padding: 0.3rem;
`;
