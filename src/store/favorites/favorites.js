import { createSlice } from '@reduxjs/toolkit';
import getLocalStorage from '../../helpers/getLocalStorage';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: getLocalStorage('favorites', null) || [],
  },
  reducers: {
    add: {
      reducer(state, action) {
        const favItem = { ...action.payload, fav: true };
        state.items.push(favItem);
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: 'favorites',
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
            localStorage: 'favorites',
          },
        };
      },
    },
  },
});

export const { add, remove } = slice.actions;

export const getOnClick = (data) => (dispatch) => {
  switch (data.type) {
    case 'add':
      return dispatch(add(data.product));
    case 'remove':
      return dispatch(remove(data.product.id));
    default:
      return;
  }
};

export default slice.reducer;
