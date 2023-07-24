import { createSlice } from '@reduxjs/toolkit';
export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    value: '',
  },
  reducers: {
    generate: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { generate } = wordSlice.actions;

export default wordSlice.reducer;
