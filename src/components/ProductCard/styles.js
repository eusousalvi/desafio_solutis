import styled from 'styled-components';

export const Card = styled.div`
  max-width: ${(props) => (props.mobile ? '19rem' : '10rem')};
  height: ${(props) => (props.mobile ? '12rem' : '19rem')};
  ${(props) => (props.mobile ? '' : 'flex-direction: column;')}
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  padding: 2rem;
`;

export const Img = styled.img`
  ${(props) => (props.mobile ? 'width: 6.85rem;' : 'height: 5rem;')}
  background-color: var(--medium-gray);
  border-radius: var(--radius);
  margin: var(--margin);
`;

export const Details = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProductAmount = styled.span`
  display: inline-block;
  color: var(--dark-purple);
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: var(--margin);
  margin-left: var(--margin);
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  background: #ccc;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: var(--dark-purple);
  font-weight: bold;
  margin: var(--margin);
`;
