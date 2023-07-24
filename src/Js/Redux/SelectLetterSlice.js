import { createSlice } from '@reduxjs/toolkit';
export const selectLetter = createSlice({
  name: 'letter',
  initialState: {
    value: [],
  },
  reducers: {
    changeLetter: (state, action) => {
      state.value.push(action.payload);
    },

    cleanLetters: state => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLetter, cleanLetters } = selectLetter.actions;

export default selectLetter.reducer;
