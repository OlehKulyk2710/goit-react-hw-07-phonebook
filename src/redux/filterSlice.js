import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateValue: (state, action) => (state = action.payload),
  },
});

export const { updateValue } = filterSlice.actions;

export default filterSlice.reducer;
