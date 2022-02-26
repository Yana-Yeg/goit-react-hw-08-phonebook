import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;
export const getItems = (state) => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    // console.log("items", items);
    // console.log("filter", filter);
    if (filter === "") return items;
    return items.filter((el) => el.name.toLowerCase().includes(filter));
  }
);
