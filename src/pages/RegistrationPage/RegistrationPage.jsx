import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";

import { FormLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={s.bg}>
        <h2>REGISTRATION PAGE</h2>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values) => {
            dispatch(register(values));
            if (isLogin) {
              navigate("/contacts");
            }
          }}
        >
          <Form className={s.form}>
            <FormLabel for="name" className={s.label}>
              Name
              <Field
                name="name"
                type="text"
                placeholder="Please enter your name"
                className={s.input}
              ></Field>
            </FormLabel>
            <FormLabel for="email" className={s.label}>
              Email
              <Field
                name="email"
                type="email"
                placeholder="Please enter your email"
                className={s.input}
              ></Field>
            </FormLabel>

            <FormLabel for="password" className={s.label}>
              Password
              <Field
                name="password"
                type="password"
                placeholder="Please enter your password"
                className={s.input}
              ></Field>
            </FormLabel>
            <button  className="button" type="submit">Register</button>
            <Link to="/login"> Do you already have account? Please LogIn</Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegistrationPage;