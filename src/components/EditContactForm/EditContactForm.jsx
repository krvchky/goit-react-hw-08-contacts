import React from 'react';
import s from './EditContactForm.module.css';
import { useDispatch } from 'react-redux';
import {
  editContactThunk,
  fetchContactsThunk,
} from '../../redux/contacts/operations';
import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RxCross2 } from 'react-icons/rx';
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

const EditContactForm = ({ item, onClose, isOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(editContactThunk({ id: item.id, ...values }))
      .unwrap()
      .then(() => {
        dispatch(fetchContactsThunk());
        editNotification();
        onClose();
      })
      .catch((error) => {
        console.error('Failed to update contact:', error);
      });
  };

  const editNotification = () => toast.success('Your contacted edited');
  return (
    <>
      {isOpen && (
        <div className={s.editModal}>
          <div className={s.editmodalWraper}>
            <div className={s.editModalWindow}>
              <button
                className={s.modaleClose}
                onClick={() => {
                  onClose();
                }}
              >
                <RxCross2 />
              </button>
              <h2>Edit your contact</h2>
              <Formik
                initialValues={item}
                onSubmit={handleSubmit}
                validationSchema={ContactSchema}
              >
                <Form className={s.form}>
                  <Field className={s.input} type="text" name="name" />
                  <ErrorMessage
                    className={s.ErrorMessage}
                    name="number"
                    component="span"
                  />
                  <Field className={s.input} type="number" name="number" />
                  <ErrorMessage
                    className={s.ErrorMessage}
                    name="number"
                    component="span"
                  />

                  <button type="submit" className={s.saveBtn}>
                    Save
                  </button>
                </Form>
              </Formik>
              <Toaster position="top-center" reverseOrder={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditContactForm;