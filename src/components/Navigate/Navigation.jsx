import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={s.link}
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;