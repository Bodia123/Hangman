import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './langaugeSlice';
import resultReducer from './resultSlice';
import wordReducer from './GenerateWordSlice';
import letterReducer from './SelectLetterSlice';
import scoreReducer from './ScoreSlice';
export default configureStore({
  reducer: {
    language: languageReducer,
    result: resultReducer,
    word: wordReducer,
    letter: letterReducer,
    score: scoreReducer,
  },
});
