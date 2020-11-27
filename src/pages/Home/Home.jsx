import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCardList from '../../components/ProductCardList/ProductCardList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { getProducts } from '../../store/products/products';

const Home = () => {
  const mobile = useSelector((state) => state.mobile.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {mobile && <SearchBar />}
      <ProductCardList />
    </>
  );
};

export default Home;
