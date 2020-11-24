import { createSlice } from '@reduxjs/toolkit';
import { add, remove } from '../cart/cart';

const slice = createSlice({
  name: 'button',
  initialState: {
    active: false,
    title: '',
    padding: '',
    height: '',
    width: '',
    icon: {},
    font: '',
  },
  reducers: {
    configureButton(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const getOnClick = (data) => (dispatch) => {
  switch (data.type) {
    case 'add':
      return dispatch(add(data.product));
    case 'remove':
      return dispatch(remove(data.product.id));
    default:
      return console.log('N faz nada');
  }
};

export const { configureButton } = slice.actions;

export default slice.reducer;
