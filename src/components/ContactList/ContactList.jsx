import ContactItem from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
