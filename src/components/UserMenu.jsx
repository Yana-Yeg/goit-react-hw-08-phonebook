import React from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultAva from "../img/avatar.png";
import { logout } from "../redux/users/authOperations";
import { getUserName } from "../redux/users/authSelectors";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";

export function UserMenu() {
  const avatar = defaultAva;
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const lang = useSelector(getLang);

  const { title, button } = langOptions.userMenuOptions;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={avatar} alt="" width="32" />
      <p style={{ margin: "0 10px", fontWeight: 700 }}>
        {title[lang]}, {userName}
      </p>
      <button type="button" onClick={(e) => dispatch(logout())}>
        {button[lang]}
      </button>
    </div>
  );
}
