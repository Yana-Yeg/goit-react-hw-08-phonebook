import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav style={{ borderBottom: "2px solid lightgrey" }}>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>
    <NavLink to="/contacts" className="link" activeClassName="activeLink">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
