import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getProductsByQuery } from '../../store/products/products';

const Results = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByQuery(params.id));
  }, [dispatch, params]);

  return (
    <>
      <SearchBar />
      <ProductCardList />
    </>
  );
};

export default Results;
