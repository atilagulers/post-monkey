import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: null,
  isAuthenticated: false,
  isAuthenticating: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
