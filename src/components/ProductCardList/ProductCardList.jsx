import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <>
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </>
  );
};

export default ProductCardList;
