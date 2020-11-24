import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

const preState = {
  adicionar: {
    active: true,
    title: 'Add ao Carrinho',
    padding: '1rem',
    height: '3.125rem',
    icon: {
      type: 'add',
      size: 27,
    },
    font: '1.125rem',
  },
  remover: {
    active: true,
    title: 'Remover',
    padding: '0.5rem',
    height: '1.5625rem',
    icon: {
      type: 'remove',
      size: 17,
    },
    font: '0.8125rem',
  },
  hide: {
    active: false,
  },
};

export const config = {
  getIcon(icon) {
    const icons = {
      add: MdAddShoppingCart,
      remove: MdRemoveShoppingCart,
    };

    const Component = icons[icon.type];

    return <Component size={icon.size} />;
  },
};

export default preState;
