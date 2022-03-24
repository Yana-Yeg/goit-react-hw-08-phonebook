import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../redux/users/authSelectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav style={{ borderBottom: "2px solid lightgrey" }}>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="link" activeClassName="activeLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
