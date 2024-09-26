import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;