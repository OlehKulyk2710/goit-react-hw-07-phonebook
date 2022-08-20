import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {contactsByFilter.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
