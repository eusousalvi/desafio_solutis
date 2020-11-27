import { createSlice } from '@reduxjs/toolkit';
import API from '../../service/API';

const slice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    items: [],
    error: null,
    page: 1,
    loadMore: true,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
      state.page = 2;
      state.loadMore = true;
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
    setProductsByDataError(state, action) {
      state.loading = false;
      state.items = [];
      state.error = action.payload;
    },
    productsPaginated(state, action) {
      state.loading = false;
      state.items = [...state.items, ...action.payload];
      state.error = null;
      if (action.payload.length >= 5) {
        state.page++;
      } else {
        state.loadMore = false;
      }
    },
  },
});

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const data = await API.productsFetch(1);
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
    dispatch(setProductsByDataError(error.message));
  }
};

export const getProductsPaginated = () => async (dispatch, getState) => {
  const state = getState().products;
  if (state.loadMore) {
    try {
      // dispatch(fetchStarted());
      const data = await API.productsFetch(state.page);
      dispatch(productsPaginated(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  }
};

export const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  setProductsByData,
  setProductsByDataError,
  productsPaginated,
} = slice.actions;

export default slice.reducer;
