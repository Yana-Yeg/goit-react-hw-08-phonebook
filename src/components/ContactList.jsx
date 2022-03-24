import React from "react";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../redux/contacts/contactsOperations";
import { getFilteredContacts } from "../redux/contacts/contactsSelector";
import Loader from "./Loader";

function ContactList() {
  const dispatch = useDispatch();
  const newContacts = useSelector(getFilteredContacts);
  const loading = useSelector((state) => state.contacts.isLoading);

  return (
    <>
      {loading && <Loader />}
      {newContacts.length > 0 && (
        <ul>
          {newContacts.map((el) => (
            <li className={s.item} key={el.id}>
              {el.name + " : " + el.number}
              <button
                className={s.btn}
                onClick={() => dispatch(removeContact(el.id))}
                disabled={loading}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;
