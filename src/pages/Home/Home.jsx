import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductCardList from '../../components/ProductCardList/ProductCardList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { getProducts } from '../../store/products/products';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <ProductCardList />
    </>
  );
};

export default Home;
