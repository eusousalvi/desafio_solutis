import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, cart, clear } from '../../store/counter/counter';
import { Counter, Wrapper, Button } from './style';
import { MdAddBox, MdIndeterminateCheckBox } from 'react-icons/md';

const Amount = ({ type, onMenu }) => {
  const value = useSelector((state) => state.counter[type]);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cart(cartState.items));

    return () => dispatch(clear());
  }, [cartState, dispatch]);

  return onMenu ? (
    <Counter>{value}</Counter>
  ) : (
    <Wrapper>
      <Button onClick={() => dispatch(subtract())}>
        <MdIndeterminateCheckBox size={25} color="#999" />
      </Button>
      <Counter>{value}</Counter>
      <Button onClick={() => dispatch(add())}>
        <MdAddBox size={25} color="#999" />
      </Button>
    </Wrapper>
  );
};

export default Amount;
