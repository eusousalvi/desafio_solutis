import React from 'react';
import { Wrapper } from './style';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';

const Footer = () => {
  const mobile = useSelector((state) => state.mobile);

  return (
    <Wrapper className="width">
      {mobile.active ? (
        <Menu />
      ) : (
        <p>
          FakeShop - Todos os Direitos Free on{' '}
          <a
            href="https://github.com/gabriel-codes/desafio_solutis"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      )}
    </Wrapper>
  );
};

export default Footer;
