import React from 'react';
import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLogedIn } from '../../redux/auth/selectors';

const LoginForm = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  const initialValues = {
    email: '',
    password: '',
  };

  const disputch = useDispatch();

  const handleSubmit = (values, options) => {
    disputch(loginThunk(values));
    options.resetForm();
  };

  if (isLogedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formWrapper}>
          <h2>Please, login here</h2>
          <div className={s.inputList}>
            <Field
              className={s.input}
              name="email"
              placeholder="Enter your email"
            />
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className={s.loginBtn} type="submit">
            Login
          </button>

          <p className={s.redirect}>
            Don't have an account?<Link to="/register">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;