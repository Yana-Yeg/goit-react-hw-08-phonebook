import "./index.css";
import React from "react";
import { lazy, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./redux/users/authOperations";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Contacts from "./pages/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getIsRefreshingCurrentUser } from "./redux/users/authSelectors";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const Contacts = lazy(() => import("./pages/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.auth.theme);
  console.log("theme :>> ", theme);
  const isRefreshingCurrentUser = useSelector(getIsRefreshingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshingCurrentUser && (
        <div
          style={{
            backgroundColor: theme === "light" ? "rgb(243, 245, 239" : "black",
            color: theme === "light" ? "black" : "rgb(43, 145, 139",
            height: "100vh",
          }}
        >
          <AppBar />

          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
            <Redirect to="/" />
          </Switch>
        </div>
      )}
    </>
  );
}
