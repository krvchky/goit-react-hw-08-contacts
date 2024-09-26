import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = {
  items: [],
  filters: {
    name: ' ',
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const contactsReducer = slice.reducer;