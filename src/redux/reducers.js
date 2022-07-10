import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});
export default combineReducers({
  filter,
});
