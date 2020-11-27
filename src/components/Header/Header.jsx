import React from 'react';
import { Wrapper } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  const mobile = useSelector((state) => state.mobile.active);

  return (
    <Wrapper mobile={mobile} className="width">
      {mobile ? (
        <Link to="/">
          <Logo />
        </Link>
      ) : (
        <>
          <Link to="/">
            <Logo />
          </Link>
          <SearchBar /> <Menu />
        </>
      )}
    </Wrapper>
  );
};

export default Header;
