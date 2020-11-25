import React from 'react';
import { MenuItem, Wrapper, CounterWrapper } from './style';
import {
  MdStore,
  MdSearch,
  MdShoppingCart,
  MdFavorite,
  MdPerson,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import Amount from '../Amount/Amount';

const Menu = () => {
  const mobile = useSelector((state) => state.mobile);

  return (
    <Wrapper mobile={mobile}>
      <MenuItem to="/" exact>
        <MdStore size={35} color="#999" />
      </MenuItem>
      <MenuItem to="/results">
        <MdSearch size={35} color="#999" />
      </MenuItem>
      <MenuItem to="/cart">
        <CounterWrapper>
          <Amount type="cartCounter" onMenu={true} />
        </CounterWrapper>
        <MdShoppingCart size={35} color="#999" />
      </MenuItem>
      <MenuItem to="/favorites">
        <MdFavorite size={35} color="#999" />
      </MenuItem>
      <MenuItem to="/user">
        <MdPerson size={35} color="#999" />
      </MenuItem>
    </Wrapper>
  );
};

export default Menu;
