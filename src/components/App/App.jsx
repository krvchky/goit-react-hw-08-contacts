import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { PrivateRoute } from '../../Rotes/PrivateRoute';
import { PublicRoute } from '../../Rotes/PublicRoute';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginForm = lazy(() => import('../LoginForm/LoginForm'));
const RegistrationForm = lazy(() =>
  import('../RegistrationForm/RegistrationForm')
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

import { refreshUserThunk } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationForm />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;