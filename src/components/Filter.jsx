import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/contacts/contactsSlice";
import { getFilter } from "../redux/contacts/contactsSelector";
import s from "./Filter.module.css";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const lang = useSelector(getLang);
  const { title: titleOpts } = langOptions.filterOptions;

  return (
    <div>
      <label className={s.label} htmlFor="">
        {titleOpts[lang]}
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
