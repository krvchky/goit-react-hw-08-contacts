import React from 'react';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <header className={s.header}>
      <h2 className={s.mainTitle}>ContactMe</h2>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;