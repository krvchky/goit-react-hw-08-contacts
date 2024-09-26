import React from 'react';
import s from './SearchBox.module.css';
import { Field, Form, Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const initialValues = { filter: '' };
  const onSubmit = (values, options) => {
    dispatch(changeFilter(values.filter));
    options.resetForm();
  };
  return (
    <div className={s.boxWraper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="filter"
            placeholder="Search for..."
          />
          <button type="submit" className={s.searchBtn}>
            <FiSearch />
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;