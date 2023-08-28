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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    login: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {login, setLoading} = authSlice.actions;

export default authSlice.reducer;
