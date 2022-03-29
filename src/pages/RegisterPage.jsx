import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/users/authOperations";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
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
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(register(newUser));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="" className="label">
        <input
          className="input"
          type="text"
          placeholder="First name"
          name="name"
          value={name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters"
          onChange={handleChange}
          required
        />
      </label>
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
        Register
      </button>
    </form>
  );
}
