import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { FormLabel } from "@mui/material";
import { logIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLogin) {
      navigate("/contacts");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className={s.bg}>
        <h2 className={s.title}>LOGIN PAGE</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(logIn(values));
          }}
        >
          <Form className={s.form}>
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
            <button  className="button" type="submit">Log In</button>
            <Link to="/register"> Do not have account, please register</Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;