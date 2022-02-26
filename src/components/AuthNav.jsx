import { NavLink } from "react-router-dom";

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
