import { combineReducers } from '@reduxjs/toolkit';
import itemsSliceReducer from './itemsSlice';
import filterSliceReducer from './filterSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  items: itemsSliceReducer,
  filter: filterSliceReducer,
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['filter'],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
