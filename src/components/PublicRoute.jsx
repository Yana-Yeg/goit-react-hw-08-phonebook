import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsLoggedIn } from "../redux/users/authSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
