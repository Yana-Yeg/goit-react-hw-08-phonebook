import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getContacts } from "../redux/contacts/contactsOperations";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/users/authSelectors";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const lang = useSelector(getLang);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  const { titlePhone, titleCont } = langOptions.contactsPageOptions;

  return (
    <div className="contacts-wrap">
      <div className="title">
        <h1>{titlePhone[lang]}</h1>
      </div>
      <Toaster />
      <ContactForm />
      <div className="wrapper">
        <h2 className="titleCont"> {titleCont[lang]}</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
