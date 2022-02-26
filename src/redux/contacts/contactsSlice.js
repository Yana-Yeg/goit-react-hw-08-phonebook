import { createSlice } from "@reduxjs/toolkit";
import { addContact, getContacts, removeContact } from "./contactsOperations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getContacts.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      isLoading: false,
    }),
    [getContacts.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [addContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [removeContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter((el) => el.id !== payload),
      isLoading: false,
    }),
    [removeContact.rejected]: (_, { payload }) => ({
      isLoading: false,
      error: payload,
    }),
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
