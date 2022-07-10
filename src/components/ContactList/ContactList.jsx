import { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getVisibleContacts, getError } from '../../redux/selectors';
import Loader from '../Loader/Loader';
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);
  if (contacts.length > 0 && !error) {
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
  } else if (error) {
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        <p>oops... There is an error!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Sorry... There is no contacts :(</p>
        <Loader />
      </div>
    );
  }
};

export default ContactList;
