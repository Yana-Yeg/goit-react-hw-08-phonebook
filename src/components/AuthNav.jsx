import { NavLink } from "react-router-dom";
import React from "react";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";
import { useSelector } from "react-redux";

const AuthNav = () => {
  const lang = useSelector(getLang);

  const {
    linkReg: linkRegOpts,
    linkLogout: linkLogoutOpts,
  } = langOptions.authNavOptions;

  return (
    <div>
      <NavLink to="/register" className="link" activeClassName="activeLink">
        {linkRegOpts[lang]}
      </NavLink>
      <NavLink to="/login" className="link" activeClassName="activeLink">
        {linkLogoutOpts[lang]}
      </NavLink>
    </div>
  );
};

export default AuthNav;
