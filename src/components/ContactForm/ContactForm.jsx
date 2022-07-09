import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/actions';
import s from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkContact = (field, value) =>
    contacts.find(
      contact => contact[field].toLowerCase() === value.toLowerCase()
    );

  const handleSubmit = event => {
    event.preventDefault();

    if (checkContact('name', name)) alert(`${name} is already added.`);
    else if (checkContact('number', number))
      alert(`${number} is already added.`);
    else {
      dispatch(addContact(name, number));
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.labelTitle}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
            value={name}
            onChange={handleChange}
            id={nameId}
          />
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input}
            value={number}
            onChange={handleChange}
            id={numberId}
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
