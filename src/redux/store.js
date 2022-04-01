import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsSlice";
import authReducer from "./users/authSlice";
import langReducer from "../redux/lang/langSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; //persist игнорлист
import storage from "redux-persist/lib/storage"; //persist

const authPersistConfig = {
  key: "auth", //если в LS надо хранить не все а только что-то
  storage,
  whitelist: ["token", "theme"], //если в LS надо хранить не все а только что-то
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authPersistedReducer,
    lang: langReducer,
  },
  middleware: (
    getDefaultMiddleware //перечень для игнорлиста
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development', //! need for developers but not for users
});

export const persistor = persistStore(store);
console.log("store", store.getState());

// const store = configureStore(
//   {
//     reducer: {
//       contacts: contactsReducer,
//     },
//   },
//   composeWithDevTools()
// );
setupListeners(store.dispatch);

export default store;
