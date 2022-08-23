import React from 'react';
import css from './App.module.css';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from 'redux/contactsApi';

const App = () => {
  const { data } = useGetContactsQuery();

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title__phonebook}>Phonebook</h1>
        {data && <ContactForm contacts={data} />}

        <h2 className={css.title__contacts}>Contacts</h2>
        <Filter />
        {data && <ContactList contacts={data} />}
      </div>
      <Toaster position="top-left" />
    </>
  );
};

export default App;
