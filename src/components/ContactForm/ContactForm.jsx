import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { addContactThunk } from '../../redux/contacts/operations';
import { Toaster, toast } from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'To short!')
    .max(20, 'To long!')
    .required('Please, enter a valid name'),
  number: Yup.string()
    .matches(/^\d+$/, 'Only digits please')
    .min(10, 'To short')
    .max(11, 'To long')
    .required('Please, enter a valid phone number'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: '', number: '' };
  const addNotify = () => toast.success('Contact added to your contacts book');
  const onSubmit = (values, options) => {
    dispatch(addContactThunk({ name: values.name, number: values.number }));
    addNotify();
    options.resetForm();
  };

  return (
    <div className={s.formWraper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter contact's name"
          />
          <ErrorMessage
            className={s.ErrorMessage}
            name="name"
            component="span"
          />
          <Field
            className={s.input}
            type="number"
            name="number"
            placeholder="Enter contact's phone number"
          />
          <ErrorMessage
            className={s.ErrorMessage}
            name="number"
            component="span"
          />
          <button type="submit" className={s.addBtn}>
            <CiCirclePlus />
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;