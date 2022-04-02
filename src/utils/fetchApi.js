import axios from "axios";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  // console.log("fetchContacts_data :>> ", data);
  return data;
}

export async function fetchAddContact(newContact) {
  const { data } = await axios.post("/contacts", newContact);
  // console.log("fetchAddContact_data :>> ", data);
  return data;
}

export async function fetchRemoveContact(id) {
  const delObj = await axios.delete(`/contacts/${id}`);
  const delId = delObj.config.url.split("/")[2];
  // console.log("fetchRemoveContact_delId :>> ", delId);
  return delId;
}

export async function fetchUpdateContactsApi(editingContact) {
  const data = await axios.patch(`/contacts/${id}`, form);
  const { id, form } = data;
  console.log("fetchUpdateContactsApi :>> ", { id, form });
  return { id, form };
}
//--------------------------------------------------------------/

export async function fetchRegister(userData) {
  const { data } = await axios.post("/users/signup", userData);
  token.set(data.token);
  // console.log("ferchRegister_data :>> ", data);
  return data;
}

export async function fetchLogin(userData) {
  const { data } = await axios.post("/users/login", userData);
  token.set(data.token);
  // console.log("ferchLogin_data :>> ", data);
  return data;
}

export async function fetchLogout() {
  const { data } = await axios.post("/users/logout");
  token.unset();
  // console.log("ferchLogout_data :>> ", data);
  return data;
}

export async function fetchCurrentUser() {
  const state = useSelector((state) => state);
  // console.log("state", state);
  const persistedToken = state.auth.token;
  // console.log("persistedToken", persistedToken);
  token.set(persistedToken);
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  const { data } = await axios.get("/users/current", persistedToken);
  // token.set(data.token);
  // console.log("ferchCurrentUser_data :>> ", data);
  return data;
}

// export async function fetchCurrentUser(token) {
//   // const state = useSelector((state) => state);
//   // // console.log("state", state);
//   // const persistedToken = state.auth.token;
//   // // console.log("persistedToken", persistedToken);
//   // if (!persistedToken) {
//   //   return;
//   // }
//   token.set(token);
//   const { data } = await axios.get("/users/current", token);
//   // token.set(data.token);
//   // console.log("ferchCurrentUser_data :>> ", data);
//   return data;
