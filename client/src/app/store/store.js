import { configureStore } from '@reduxjs/toolkit';
import {
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

// Todos los  (Slices)
import lang from './slices/langSlice';

const rootReducer = combineReducers({
 lang: lang,
});

const localStorageConfig = {
 key: 'root',
 storage: storage,
 whitelist: ['lang'], // especifica aquí los reductores que quieres persistir en Local Storage
};

const sessionConfig = {
 key: 'session',
 storage: sessionStorage,
 whitelist: [], // especifica aquí los reductores que quieres persistir en Session Storage
};

// const localStorageReducer = persistReducer(
//  localStorageConfig,
//  combineReducers({
//   lang: lang,
//  }),
// );

const sessionReducer = persistReducer(sessionConfig, combineReducers({}));

export const store = configureStore({
 reducer: persistReducer(localStorageConfig, rootReducer),
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

export const sessionStore = configureStore({
 reducer: sessionReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});
