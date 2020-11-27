import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import { Wrapper } from './styles';

const ProductCardList = () => {
  const products = useSelector((state) => state.products);
  const mobile = useSelector((state) => state.mobile.active);

  if (products.loading) return <Loading />;

  return (
    <Wrapper mobile={mobile}>
      {products &&
        products.items.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </Wrapper>
  );
};

export default ProductCardList;
