import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../redux/users/authSelectors";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const lang = useSelector(getLang);

  const { titleHome, titleContacts } = langOptions.navigationOptions;

  return (
    <nav style={{ borderBottom: "2px solid lightgrey" }}>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        {titleHome[lang]}
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="link" activeClassName="activeLink">
          {titleContacts[lang]}
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
