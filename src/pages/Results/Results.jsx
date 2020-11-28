import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import DefaultMessage from '../../components/DefaultMessage/DefaultMessage';
import { getProductsByQuery } from '../../store/products/products';

const Results = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsByQuery(params.id));
  }, [dispatch, params]);

  return (
    <>
      {mobile.active && <SearchBar />}
      {products.items.length > 0 ? (
        <ProductCardList />
      ) : (
        <DefaultMessage text="Não encontramos. Vamos tentar de novo?" />
      )}
    </>
  );
};

export default Results;
