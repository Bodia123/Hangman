import { configureStore, combineReducers } from '@reduxjs/toolkit';
import languageReducer from './langaugeSlice';
import resultReducer from './resultSlice';
import wordReducer from './GenerateWordSlice';
import letterReducer from './SelectLetterSlice';
import scoreReducer from './ScoreSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  language: languageReducer,
  result: resultReducer,
  word: wordReducer,
  letter: letterReducer,
  score: scoreReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
