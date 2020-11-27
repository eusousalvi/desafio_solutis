const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'mobile',
  initialState: {
    active: true,
  },
  reducers: {
    activeMobile(state, action) {
      state.active = true;
    },
    deactivateMobile(state, action) {
      state.active = false;
    },
  },
});

export const { activeMobile, deactivateMobile } = slice.actions;
export default slice.reducer;
