import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../redux/users/authSelectors";

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUserName);
  console.log("name :>> ", name);
  return (
    <>
      {isLoggedIn ? (
        <h1>Hello, {name} =)</h1>
      ) : (
        <h1>Login or get registration</h1>
      )}
    </>
  );
}
