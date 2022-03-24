import React from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultAva from "../img/avatar.png";
import { logOut } from "../redux/users/authOperations";
import { getUserName } from "../redux/users/authSelectors";
import { changeTheme } from "../redux/users/authSlice";
import style from "./UserMenu.module.css";

export function UserMenu() {
  const avatar = defaultAva;
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const theme = useSelector((state) => state.auth.theme);

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      // className={theme === "light" ? style.lightTheme : style.darkTheme}
    >
      <img src={avatar} alt="" width="32" />
      <p style={{ margin: "0 10px", fontWeight: 700 }}>Welcome, {userName}</p>
      <button type="button" onClick={(e) => dispatch(logOut())}>
        LogOut
      </button>
      <select
        name="theme"
        value={theme}
        className={style.select}
        onChange={(e) => dispatch(changeTheme(e.target.value))}
      >
        <option value="light">
          light <span>&#127774;</span>
        </option>
        <option value="dark">
          dark <span>&#127762;</span>
        </option>
      </select>
    </div>
  );
}
