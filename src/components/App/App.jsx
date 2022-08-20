import React from 'react';
import css from './App.module.css';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title__phonebook}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.title__contacts}>Contacts</h2>
        <Filter />
        {contacts.length !== 0 && <ContactList />}
      </div>
      <Toaster position="top-left" />
    </>
  );
};

export default App;
