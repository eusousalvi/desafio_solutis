import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { setProductsByData } from '../../store/products/products';
import { configureButton } from '../../store/button/button';
import btn from '../../helpers/btnConfig';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setProductsByData(cart.items));
    dispatch(configureButton(btn.remover));
    return () => dispatch(configureButton(btn.hide));
  }, [dispatch, cart]);

  return <ProductCardList />;
};

export default Cart;
