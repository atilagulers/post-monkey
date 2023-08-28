import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

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
    console.error('Login error: ', error);
    throw error;
  }
};
