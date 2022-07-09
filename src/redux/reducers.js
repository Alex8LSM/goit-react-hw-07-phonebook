import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
import importContacts from '../Data/Contacts.json';

const items = createReducer(importContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
