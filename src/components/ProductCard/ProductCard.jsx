import React from 'react';
import Button from '../Button/Button.jsx';
import { Card, Img, Details } from './styles';
import FavButton from '../FavButton/FavButton.jsx';
import cropString from '../../helpers/cropString.js';
import formatCurrency from '../../helpers/formatCurrency.js';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Img src={product.image} />
      </Link>
      <Details>
        <h3>{cropString(product.name, 13)}</h3>
        <p>{formatCurrency(product.price)}</p>
        <p>{cropString(product.description, 30)}</p>
        <Button product={product} />
        <FavButton product={product} />
      </Details>
    </Card>
  );
};

export default ProductCard;
