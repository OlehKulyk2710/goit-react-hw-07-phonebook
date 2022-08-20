import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateContacts: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export const { updateContacts, deleteContact } = itemsSlice.actions;

export default itemsSlice.reducer;
