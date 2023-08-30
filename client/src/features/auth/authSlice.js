import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import {loginUser} from 'services/api';

const tokenCookie = Cookies.get('token');
const userCookie = Cookies.get('user');

const initialState = {
  token: tokenCookie || '',
  user: userCookie ? JSON.parse(userCookie) : null,
  loading: false,
  errorMessage: '',
};

export const asyncLoginUser = createAsyncThunk(
  'auth/asyncLoginUser',
  async ({usernameOrEmail, password}) => {
    const response = await loginUser({usernameOrEmail, password});

    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //login: (state, action) => {
    //  const {token, user} = action.payload;
    //  state.token = token;
    //  state.user = user;
    //  Cookies.set('token', token, {expires: 30});
    //  Cookies.set('user', JSON.stringify(user), {expires: 30});
    //},
    logout: (state) => {
      state.token = '';
      state.user = null;
      Cookies.remove('token');
      Cookies.remove('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncLoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncLoginUser.fulfilled, (state, action) => {
        state.loading = false;

        const {token, user} = action.payload;
        state.token = token;
        state.user = user;

        Cookies.set('token', token, {expires: 30});
        Cookies.set('user', JSON.stringify(user), {expires: 30});
      })
      .addCase(asyncLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = 'Invalid credentials';
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
