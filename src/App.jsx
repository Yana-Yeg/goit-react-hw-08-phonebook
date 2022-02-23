import "./index.css";
import style from "./App.module.css";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { getContacts } from "./redux/contactsOperations";
import { useDispatch } from "react-redux";

export default function App() {
  const [theme, setTheme] = useState("light");

  //asynk thunk
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   theme === "light" && document.body.classList.add("lightTheme");
  //   theme === "dark"
  //     ? document.body.classList.replace("lightTheme", "darkTheme")
  //     : document.body.classList.replace("darkTheme", "lightTheme");
  // }, [theme]);

  const styleH1 = {
    textAlign: "center",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div className={theme === "light" ? style.lightTheme : style.darkTheme}>
      <div className="title">
        <h1 style={styleH1}>Phonebook</h1>
        <select
          name="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </div>
      <Toaster />
      <ContactForm />
      <div className="wrapper">
        <h2 className="titleCont">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
