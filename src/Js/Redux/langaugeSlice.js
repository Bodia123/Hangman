import { createSlice } from '@reduxjs/toolkit';
export const changeUkranianLanguageSlice = createSlice({
  name: 'language',
  initialState: {
    value: true,
  },
  reducers: {
    change: state => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = changeUkranianLanguageSlice.actions;

export default changeUkranianLanguageSlice.reducer;
