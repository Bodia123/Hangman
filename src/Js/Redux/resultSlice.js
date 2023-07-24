import { createSlice } from '@reduxjs/toolkit';
export const changeResultGame = createSlice({
  name: 'result',
  initialState: {
    value: 0,
  },
  reducers: {
    change: state => {
      state.value += 1;
    },

    reset: state => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change, reset } = changeResultGame.actions;

export default changeResultGame.reducer;
