import { createSlice } from '@reduxjs/toolkit';
import getLocalStorage from '../../helpers/getLocalStorage';

const slice = createSlice({
  name: 'counter',
  initialState: {
    cartCounter: getLocalStorage('cart', null)?.length || 0,
    productCounter: 1,
  },
  reducers: {
    add(state, action) {
      state.productCounter++;
    },
    subtract(state, action) {
      if (state.productCounter > 1) {
        state.productCounter--;
      }
    },
    cart(state, action) {
      state.cartCounter = action.payload.length;
    },
    clear(state, action) {
      return { ...state, productCounter: 1 };
    },
  },
});

export const { add, subtract, cart, clear } = slice.actions;
export default slice.reducer;
