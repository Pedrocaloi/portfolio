import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
 name: 'lang',
 initialState: {
  lang: 'english',
 },
 reducers: {
  setLang: (state) => {
   state.lang = state.lang === 'english' ? 'spanish' : 'english';
  },
 },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
