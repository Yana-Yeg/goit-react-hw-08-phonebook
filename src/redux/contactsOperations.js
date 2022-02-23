import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchAddContact,
  fetchRemoveContact,
} from "../utils/fetchApi";

//AsyncThunk
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const contacts = await fetchAddContact(newContact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkApi) => {
    try {
      const delId = await fetchRemoveContact(id);
      return delId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
