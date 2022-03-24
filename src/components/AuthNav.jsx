import { NavLink } from "react-router-dom";
import React from "react";

const AuthNav = () => (
  <div>
    <NavLink to="/register" className="link" activeClassName="activeLink">
      Registration
    </NavLink>
    <NavLink to="/login" className="link" activeClassName="activeLink">
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
