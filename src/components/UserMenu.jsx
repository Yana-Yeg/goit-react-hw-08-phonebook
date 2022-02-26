import { useDispatch, useSelector } from "react-redux";
import defaultAva from "../img/avatar.png";
import { logOut } from "../redux/users/authOperations";
import { getUserName } from "../redux/users/authSelectors";

export function UserMenu() {
  const avatar = defaultAva;
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={avatar} alt="" width="32" />
      <p style={{ margin: "0 10px", fontWeight: 700 }}>Welcome, {name}</p>
      <button type="button" onClick={(e) => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
}
