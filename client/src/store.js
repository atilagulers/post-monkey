import {configureStore} from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice.js';
import tabReducer from 'features/tab/tabSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tab: tabReducer,
  },
});
