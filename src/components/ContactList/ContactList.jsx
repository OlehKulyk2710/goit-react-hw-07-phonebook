import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {contactsByFilter.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
