import React from "react";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import { UserMenu } from "./UserMenu";
import { getIsLoggedIn } from "../redux/users/authSelectors";
import { useSelector } from "react-redux";

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header
      style={{ display: "flex", justifyContent: "space-between" }}
      // className={theme === "light" ? style.lightTheme : style.darkTheme}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
