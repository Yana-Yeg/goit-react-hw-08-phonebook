import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getContacts } from "../redux/contacts/contactsOperations";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/users/authSelectors";

export default function App() {
  // const [theme, setTheme] = useState("light");
  //asynk thunk
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  //   const styleH1 = {
  //     textAlign: "center",
  //     color: theme === "light" ? "black" : "white",
  //   };

  return (
    <div>
      <div className="title">
        <h1
        //   style={styleH1}
        >
          Phonebook
        </h1>
        {/* <select
          name="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select> */}
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
