import { createSlice } from '@reduxjs/toolkit';
import API from '../../service/API';

const slice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    items: [],
    error: null,
    page: 1,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.items = [];
      state.error = action.payload;
    },
    setProductsByData(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
  },
});

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const data = await API.productsFetch();
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const getProductsByQuery = (searchTerm) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const data = await API.productsQueryFetch(searchTerm);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const getProductsByData = (data) => (dispatch) => {
  try {
    dispatch(setProductsByData(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  setProductsByData,
} = slice.actions;

export default slice.reducer;
