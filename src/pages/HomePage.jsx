import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../redux/users/authSelectors";

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUserName);
  // console.log("name :>> ", name);
  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <h1>Hello, {name} &#128075;</h1>
      ) : (
        <h1>Login or Registration</h1>
      )}
    </div>
  );
}
