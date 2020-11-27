import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { setProductsByData } from '../../store/products/products';
import DefaultMessage from '../../components/DefaultMessage/DefaultMessage';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(setProductsByData(favorites.items));
  }, [dispatch, favorites]);

  if (favorites?.items.length <= 0)
    return <DefaultMessage text="Sua lista de desejos está vazia :(" />;
  return <ProductCardList />;
};

export default Favorites;
