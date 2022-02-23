// import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { changeFilter } from "./contactsActions";
// import {
//   getContacts,
//   addContact,
//   removeContact,
// } from "../redux/contactsOperations";

// //AsyncThunk
// const itemsReducer = createReducer([], {
//   [getContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [removeContact.fulfilled]: (state, { payload }) =>
//     state.filter((el) => el.id !== payload),
// });

// const isLoadingReducer = createReducer(false, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [removeContact.pending]: () => true,
//   [removeContact.fulfilled]: () => false,
//   [removeContact.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [getContacts.rejected]: (_, { payload }) => payload,
//   [getContacts.pending]: () => null,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,
//   [removeContact.rejected]: (_, { payload }) => payload,
//   [removeContact.pending]: () => null,
// });

// const filterReducer = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
//   isLoading: isLoadingReducer,
//   error: errorReducer,
// });

// export default contactsReducer;
