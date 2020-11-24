import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { setProductsByData } from '../../store/products/products';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(setProductsByData(favorites.items));
  }, [dispatch, favorites]);

  return <ProductCardList />;
};

export default Favorites;
