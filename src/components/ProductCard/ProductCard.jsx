import React, { useEffect, useState } from 'react';
import Button from '../Button/Button.jsx';
import { Card, Img, Details, ProductAmount, Bottom, Price } from './styles';
import FavButton from '../FavButton/FavButton.jsx';
import cropString from '../../helpers/cropString.js';
import formatCurrency from '../../helpers/formatCurrency.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const [onCart, setOnCart] = useState(false);
  const mobile = useSelector((state) => state.mobile.active);

  useEffect(() => {
    const local = window.location.pathname;

    if (local === '/cart') {
      setOnCart(true);
    }

    return () => setOnCart(false);
  }, [setOnCart]);

  return (
    <Link to={`/product/${product.id}`}>
      <Card mobile={mobile}>
        <Img src={product.image} />
        <Details>
          <h3>{cropString(product.name, 13)}</h3>
          <Price>{formatCurrency(product.price)}</Price>
          <p>{cropString(product.description, 30)}</p>
          <Bottom>
            <Button product={product} />
            {onCart && <ProductAmount>{product.amount}</ProductAmount>}
          </Bottom>
          <FavButton product={product} />
        </Details>
      </Card>
    </Link>
  );
};

export default ProductCard;
