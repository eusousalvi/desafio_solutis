import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPaginated } from '../../store/products/products';
import { LoadButton } from './styles';
import { MdAddCircle } from 'react-icons/md';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.products.loadMore);

  if (showButton)
    return (
      <LoadButton onClick={() => dispatch(getProductsPaginated())}>
        <MdAddCircle size={35} color="#985FF3" />
      </LoadButton>
    );

  return null;
};

export default LoadMoreButton;
