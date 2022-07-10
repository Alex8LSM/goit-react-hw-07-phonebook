export const getFilter = state => state.contacts.filter;
export const getVisibleContacts = (contacts, filter) => {
  const optimizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(optimizedFilter)
  );
};
