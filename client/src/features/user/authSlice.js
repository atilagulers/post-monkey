import {createSlice} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const tokenCookie = Cookies.get('token');
const userCookie = Cookies.get('user');

const initialState = {
  token: tokenCookie || '',
  user: userCookie ? JSON.parse(userCookie) : null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    login: (state, action) => {
      const {token, user} = action.payload;
      state.token = token;
      state.user = user;
      Cookies.set('token', token, {expires: 30});
      Cookies.set('user', JSON.stringify(user), {expires: 30});
    },
    logout: (state) => {
      state.token = '';
      state.user = null;
      Cookies.remove('token');
      Cookies.remove('user');
    },
  },
});

export const {login, setLoading, logout} = authSlice.actions;

export default authSlice.reducer;
