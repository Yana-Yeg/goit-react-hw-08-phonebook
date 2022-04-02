import React from "react";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import { UserMenu } from "./UserMenu";
import { getIsLoggedIn } from "../redux/users/authSelectors";
import { useSelector } from "react-redux";
import SwitchLang from "./SwitchLang";
import SwitchTheme from "./SwitchTheme";

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Navigation />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <div style={{ marginLeft: "30px" }}>
          <SwitchLang />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
