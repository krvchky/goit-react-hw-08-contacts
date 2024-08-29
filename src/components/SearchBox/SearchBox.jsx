import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { filteredContact } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filters = useSelector(filteredContact);
  const dispatch = useDispatch();
  return (
    <div className={s.form}>
      <p>Find contact by name:</p>
      <input
        type="text"
        value={filters}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;