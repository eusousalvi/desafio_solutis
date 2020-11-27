import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 5%;
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  padding: 0 5%;
`;

export const Bottom = styled.div`
  display: flex;
`;

export const Price = styled.p`
  color: var(--dark-purple);
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const Img = styled.img`
  max-width: 19rem;
`;
