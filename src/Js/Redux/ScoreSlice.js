import { createSlice } from '@reduxjs/toolkit';
export const changeScoreSlice = createSlice({
  name: 'result',
  initialState: {
    value: 0,
    games: 0,
  },
  reducers: {
    win: state => {
      state.value += 10;
      state.games += 1;
    },
    lose: state => {
      state.games += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { win, lose } = changeScoreSlice.actions;

export default changeScoreSlice.reducer;
