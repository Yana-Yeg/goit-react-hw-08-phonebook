import axios from "axios";

axios.defaults.baseURL = "https://6212466601ccdac0743682aa.mockapi.io";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  // console.log("data :>> ", data);
  return data;
}

export async function fetchAddContact(newContact) {
  const { data } = await axios.post("/contacts", newContact);
  // console.log("data :>> ", data);
  return data;
}

export async function fetchRemoveContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  // console.log("data.id :>> ", data.id);
  return data.id;
}
