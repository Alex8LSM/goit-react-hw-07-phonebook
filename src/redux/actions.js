import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContact = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/changeFilter');
