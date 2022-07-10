import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'api/contactsApi';
import { getVisibleContacts, getFilter } from '../../redux/selectors';
import { useGetContactsQuery } from '../../api/contactsApi';
import Loader from '../Loader/Loader';
import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { contacts, isFetching, isError, error } = useGetContactsQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching, isError, error }) => ({
        contacts: data && getVisibleContacts(data, filter),
        isFetching,
        isError,
        error,
      }),
    }
  );

  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = id => deleteContact(id);
  let contactList = null;

  if (contacts) {
    if (contacts.length === 0)
      contactList = <p className={s.text}>No contacts to show</p>;
    else
      contactList = contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ));
  }
  return (
    <div>
      {isError && <p>{error.data}</p>}
      {contactList}
      {isFetching && <Loader />}
    </div>
  );
};

export default ContactList;
