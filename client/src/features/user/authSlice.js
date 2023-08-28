import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      console.log('LOGGED IN');
    },
  },
});

export const {login} = authSlice.actions;

export default authSlice.reducer;
