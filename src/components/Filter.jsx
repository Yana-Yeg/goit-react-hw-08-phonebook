import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/contactsSlice";
import { getFilter } from "../redux/contactsSelector";
import s from "./Filter.module.css";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.label} htmlFor="">
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
