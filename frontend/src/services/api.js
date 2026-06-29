import axios from 'axios';
import setAuthToken from './setAuthToken';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set auth token on initial load if present
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default api;