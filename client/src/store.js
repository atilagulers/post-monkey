import {configureStore} from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice.js';
import tabReducer from 'features/tabs/tabSlice.js';
import postReducer from 'features/posts/postSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tabs: tabReducer,
    posts: postReducer,
  },
});
