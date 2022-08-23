import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// console.log('store', store.getState());
