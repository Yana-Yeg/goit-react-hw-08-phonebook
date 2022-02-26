import "./index.css";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./redux/users/authOperations";

import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Contacts from "./pages/ContactsPage";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
