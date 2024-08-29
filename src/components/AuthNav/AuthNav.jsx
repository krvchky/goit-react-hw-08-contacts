import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.cont}>
      <NavLink
        to="/register"
        className={s.link}
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;