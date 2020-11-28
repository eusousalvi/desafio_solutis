import React from 'react';
import { Wrapper, HomeLink } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const mobile = useSelector((state) => state.mobile.active);

  return (
    <Wrapper mobile={mobile} className="width">
      {mobile ? (
        <HomeLink to="/">
          <Logo />
        </HomeLink>
      ) : (
        <>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
          <SearchBar /> <Menu />
        </>
      )}
    </Wrapper>
  );
};

export default Header;
