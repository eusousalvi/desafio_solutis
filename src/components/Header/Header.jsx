import React from 'react';
import { Wrapper } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const mobile = useSelector((state) => state.mobile);

  return (
    <Wrapper mobile={mobile} className="maxWidth">
      {mobile.active ? (
        <Logo />
      ) : (
        <>
          <Logo /> <SearchBar /> <Menu />
        </>
      )}
    </Wrapper>
  );
};

export default Header;
