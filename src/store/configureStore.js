import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import products from './products/products';
import button from './button/button';
import cart from './cart/cart';
import favorites from './favorites/favorites';
import mobile from './mobile/mobile';
import counter from './counter/counter';
import localStorage from '../store/middlewares/localStorage';

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({
  products,
  button,
  cart,
  favorites,
  mobile,
  counter,
});
const store = configureStore({ reducer, middleware });

export default store;
