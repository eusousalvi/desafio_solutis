import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import API from '../../service/API';
import { configureButton } from '../../store/button/button';
import btn from '../../helpers/btnConfig';
import { Wrapper, Img, Content, Price } from './style';
import FavButton from '../../components/FavButton/FavButton';
import formatCurrency from '../../helpers/formatCurrency';

const Product = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProduct() {
      try {
        const prod = await API.productFetch(params.id);
        setProduct(prod);
      } catch (error) {
        setProduct(null);
        console.log(error.message);
      }
    }
    getProduct();
    dispatch(configureButton(btn.adicionar));

    return () => dispatch(configureButton(btn.hide));
  }, [params, setProduct, dispatch]);

  if (product) {
    return (
      <Wrapper>
        <Img src={product.image} />
        <FavButton product={product} />
        <Content>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Price>{formatCurrency(product.price)}</Price>
        </Content>
        <Button product={product} />
      </Wrapper>
    );
  }
  return null;
};

export default Product;
