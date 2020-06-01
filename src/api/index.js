import axios from 'axios';
import keys from '../keys';

const api = axios.create({
  baseURL: keys.API_URL,
  withCredentials: true,
});

api.interceptors.response.use(response => {
  return response;
}, async error => {
  if (error.response.status === 401) {
    await api.get('/user/logout');
  }
  return error;
});

export default api;