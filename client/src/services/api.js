import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const register = async (user) => {
  try {
    const response = await api.post('/auth/register', user);
    return response.data;
  } catch (error) {
    console.error('Register error: ', error);
    throw error;
  }
};
