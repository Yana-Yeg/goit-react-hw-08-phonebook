import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../redux/users/authSelectors";
import { langOptions } from "../assets/langOptions";
import { getLang } from "../redux/lang/langSelector";

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUserName);
  const lang = useSelector(getLang);
  const { title, greetings } = langOptions.homePage;

  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <h1>
          {title[lang]}, {name} &#128075;
        </h1>
      ) : (
        <h1>{greetings[lang]}</h1>
      )}
    </div>
  );
}
