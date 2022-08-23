import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import itemsReducer from './itemsSlice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
