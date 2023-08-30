import axios from 'axios';
import {store} from '../store.js';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use(
  (config) => {
    const {token} = store.getState()?.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth

export const registerUser = async (user) => {
  try {
    const response = await api.post('/auth/register', user);

    return response.data;
  } catch (error) {
    console.error('Register error: ', error);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await api.post('/auth/login', user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Post

export const fetchPostsByUserID = async (username) => {
  try {
    const response = await api.get(`/posts/${username}`);

    return response.data;
  } catch (error) {
    console.error('Login error: ', error);
    throw error;
  }
};

export default api;
