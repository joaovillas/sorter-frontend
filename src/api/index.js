import axios from 'axios';
import keys from '../keys';

const token = localStorage.getItem('user_token') || null;

const api = axios.create({
  baseURL: keys.API_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default api;