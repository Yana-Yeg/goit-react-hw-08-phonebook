import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/users/authOperations";
import { langOptionsLogin } from "../assets/langOptionsLogin";
import { getLang } from "../redux/lang/langSelector";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const { inputEmail, inputPass, buttonLogin } = langOptionsLogin;

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="" className="label">
        <input
          className="input"
          type="text"
          placeholder={inputEmail[lang]}
          name="email"
          value={email}
          // pattern="/^\S+@\S+$/i"
          // title="Name may contain only letters"
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="" className="label">
        <input
          className="input"
          type="password"
          // type="text"
          placeholder={inputPass[lang]}
          name="password"
          value={password}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters"
          onChange={handleChange}
          required
        />
      </label>

      <button className="formBtn" type="submit">
        {buttonLogin[lang]}
      </button>
    </form>
  );
}
