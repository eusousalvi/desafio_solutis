import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styles';
import { getOnClick } from '../../store/favorites/favorites';

const FavButton = ({ product }) => {
  const favorites = useSelector((state) => state.favorites.items);
  const [favState] = favorites.filter((item) => item.id === product.id);
  const dispatch = useDispatch();
  const add = { type: 'add', product };
  const remove = { type: 'remove', product };

  console.log(favState);

  return (
    <>
      {favState?.fav ? (
        <Wrapper onClick={() => dispatch(getOnClick(remove))}>
          <MdFavorite size={24} color="#DB4E4E" />
        </Wrapper>
      ) : (
        <Wrapper onClick={() => dispatch(getOnClick(add))}>
          <MdFavoriteBorder size={24} />
        </Wrapper>
      )}
    </>
  );
};

export default FavButton;
