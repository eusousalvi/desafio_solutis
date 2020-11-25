import { createSlice } from '@reduxjs/toolkit';
import getLocalStorage from '../../helpers/getLocalStorage';

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: getLocalStorage('cart', null) || [],
  },
  reducers: {
    add: {
      reducer(state, action) {
        let newProduct = action.payload;
        state.items.forEach((item) => {
          if (item.id === newProduct.id) {
            item.amount = item.amount + newProduct.amount;
            newProduct = null;
          }
        });
        newProduct && state.items.push(newProduct);
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: 'cart',
          },
        };
      },
    },
    remove: {
      reducer(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: 'cart',
          },
        };
      },
    },
  },
});

export const { add, remove } = slice.actions;
export default slice.reducer;
