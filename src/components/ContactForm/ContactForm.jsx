import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contactsApi';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';

const NAME = 'name';
const NUMBER = 'number';

const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = event => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    switch (inputName) {
      case NAME:
        setName(inputValue);
        break;
      case NUMBER:
        setNumber(inputValue);
        break;
      default:
        console.log('Unrecognized input name: ', { inputName });
    }
  };

  const checkNewName = name => {
    const newName = name.toLowerCase();
    const isNameExist = contacts.filter(
      item => item.name.toLowerCase() === newName
    );
    return isNameExist.length;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isNameExist = checkNewName(name);
    if (isNameExist) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    const contactData = { id: shortid.generate(), name, phone: number };
    createContact(contactData);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name={NAME}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name={NUMBER}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btn__submit} disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};
