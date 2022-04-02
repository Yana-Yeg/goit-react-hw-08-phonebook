import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/theme/themeSlice";
import { getTheme } from "../redux/theme/themeSelector";
import style from "./SwitchTheme.module.css";
import { langOptionsSwitchTheme } from "../assets/langOptionsSwitchTheme";
import { getLang } from "../redux/lang/langSelector";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const lang = useSelector(getLang);

  const { light, dark } = langOptionsSwitchTheme;

  return (
    <select
      name="theme"
      value={theme}
      className={style.select}
      style={
        theme === "light" ? { color: "black" } : { color: "rgb(43, 145, 139)" }
      }
      onChange={(e) => dispatch(changeTheme(e.target.value))}
    >
      <option value="light">
        {light[lang]}
        {/* &#127774; */}
      </option>
      <option value="dark">
        {dark[lang]}
        {/* &#127762; */}
      </option>
    </select>
  );
};

export default SwitchTheme;
