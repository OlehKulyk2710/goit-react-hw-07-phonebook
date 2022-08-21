import React from 'react';
import css from './App.module.css';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';

const App = () => {
  const { data, error, isLoading, isError } = useGetContactsQuery();

  console.log(data);

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
