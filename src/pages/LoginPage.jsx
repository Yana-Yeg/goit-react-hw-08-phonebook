import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/users/authOperations";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
    dispatch(logIn(user));
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="" className="label">
        <input
          className="input"
          type="text"
          placeholder="Email"
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
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters"
          onChange={handleChange}
          required
        />
      </label>

      <button className="formBtn" type="submit">
        LogIn
      </button>
    </form>
  );
}
