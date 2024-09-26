import React from 'react';
import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <nav className={s.navigation}>
        <h3 className={s.userName}>Welcome</h3>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;