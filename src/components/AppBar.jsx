import React from "react";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import { UserMenu } from "./UserMenu";
import { getIsLoggedIn } from "../redux/users/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../redux/lang/langSlice";
import { getLang } from "../redux/lang/langSelector";
import { changeTheme } from "../redux/theme/themeSlice";
import { getTheme } from "../redux/theme/themeSelector";
import style from "./AppBar.module.css";

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const theme = useSelector(getTheme);

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <div>
        <select
          className={style.select}
          style={
            theme === "light"
              ? { color: "black" }
              : { color: "rgb(43, 145, 139)" }
          }
          onChange={(e) => dispatch(changeLang(e.target.value))}
          name="lang"
          value={lang}
        >
          <option value={"en"}>EN</option>
          <option value={"ua"}>UA</option>
        </select>
        <select
          name="theme"
          value={theme}
          className={style.select}
          style={
            theme === "light"
              ? { color: "black" }
              : { color: "rgb(43, 145, 139)" }
          }
          onChange={(e) => dispatch(changeTheme(e.target.value))}
        >
          <option value="light">light &#127774;</option>
          <option value="dark">dark &#127762;</option>
        </select>
      </div>
    </header>
  );
}

export default AppBar;
