import React from 'react';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.userMenu}>
      <h3 className={s.userName}>Welcome back, {user.name}</h3>
      <button className={s.logoutBtn} onClick={() => dispatch(logoutThunk())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;