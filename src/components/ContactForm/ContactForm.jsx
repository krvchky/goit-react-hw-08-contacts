import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    const newItem = { name: values.name, number: values.number };

    dispatch(addContact(newItem));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          Name:
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="p" />
        </label>

        <label htmlFor="number" className={s.label}>
          Number:
          <Field type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="p" />
        </label>
        <button   className="button" type="submit">Add Contact</button>
        
      </Form>
    </Formik>
  );
};

export default ContactForm;