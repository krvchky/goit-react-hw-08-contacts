import React from 'react';
import s from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLogedIn } from '../../redux/auth/selectors';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const disputch = useDispatch();

  const handleSubmit = (values, options) => {
    disputch(registerThunk(values));
    options.resetForm();
  };

  const isLogedIn = useSelector(selectIsLogedIn);

  if (isLogedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formWrapper}>
          <h2>Please, register here</h2>
          <div className={s.inputList}>
            <Field
              className={s.input}
              name="name"
              placeholder="Enter your name"
            />
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

          <p>
            Already have an account? <Link to="/login">Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;