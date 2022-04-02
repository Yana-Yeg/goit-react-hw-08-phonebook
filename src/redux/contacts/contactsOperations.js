import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchAddContact,
  fetchRemoveContact,
  fetchUpdateContactsApi,
} from "../../utils/fetchApi";

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

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (editingContact, thunkApi) => {
    try {
      const { id, form } = await fetchUpdateContactsApi(editingContact);
      return { id, form };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// //AsyncThunk
// export const getContacts = createAsyncThunk(
//   "contacts/getContacts",
//   async (_, thunkApi) => {
//     try {
//       const contacts = await axios.get("/contacts");
//       console.log("contacts.data", contacts.data);
//       return contacts.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newContact, thunkApi) => {
//     try {
//       const contacts = await axios.post("/contacts", newContact);
//       console.log("contacts.data", contacts.data);
//       return contacts.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const removeContact = createAsyncThunk(
//   "contacts/removeContact",
//   async (id, thunkApi) => {
//     try {
//       const delObj = await axios.delete(`/contacts/${id}`);
//       const delId = delObj.config.url.split("/")[2];
//       console.log("delId", delId);
//       return delId;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
