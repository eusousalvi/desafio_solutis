import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import products from './products/products';
import button from './button/button';
import cart from './cart/cart';
import favorites from './favorites/favorites';
import localStorage from '../store/middlewares/localStorage';

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ products, button, cart, favorites });
const store = configureStore({ reducer, middleware });

export default store;
