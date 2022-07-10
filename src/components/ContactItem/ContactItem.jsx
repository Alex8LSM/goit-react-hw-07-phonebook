import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, phone } = contact;
  return (
    <li className={s.item}>
      <p className={s.contactName}>{name}</p>
      <p className={s.contactNumber}>{phone}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
export default ContactItem;
