import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import authReducer from "./users/authSlice";
import langReducer from "../redux/lang/langSlice";
import themeReducer from "../redux/theme/themeSlice";
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
  whitelist: ["token"], //если в LS надо хранить не все а только что-то
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["lang", "theme"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authPersistedReducer,
  lang: langReducer,
  theme: themeReducer,
});

const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootPersistedReducer,
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

setupListeners(store.dispatch);

export default store;
