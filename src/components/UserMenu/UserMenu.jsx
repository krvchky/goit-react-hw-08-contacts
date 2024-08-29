import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const UserMenu = () => {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div className={s.cont}>
      <p>Welcome {username}</p>
      <Link
        to="/login"
        onClick={() => {
          dispatch(logOut());
          if (!isLogin) {
            navigate("/login");
          }
        }}
      >
        Log out
      </Link>
    </div>
  );
};

export default UserMenu;