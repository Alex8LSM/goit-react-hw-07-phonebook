import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './SearchFilter/SearchFilter';
import './App.css';

function Phonebook() {
  return (
    <div className="container">
      <h1 className="maintitle"> Phonebook </h1>
      <h2 className="title">Add new contact</h2>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export const App = () => {
  return Phonebook();
};
