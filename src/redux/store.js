import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import { contactsApi } from '../api/contactsApi';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({}),
  contactsApi.middleware,
];

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: reducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
