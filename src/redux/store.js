import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contactsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore(
  {
    reducer: {
      contacts: contactsReducer,
    },
  },
  composeWithDevTools()
);
setupListeners(store.dispatch);

export default store;
