import React, { createContext, useReducer, useEffect } from 'react';
import authReducer from './authReducer';
import api from '../services/api';
import setAuthToken from '../services/setAuthToken';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode

// Initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

// Create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    loadUser();
  }, []);

  // Load User
  const loadUser = async () => {
    const token = localStorage.getItem('token'); // Get token from storage
    if (token) {
      try {
        // Check if token is expired
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          // Token is expired
          dispatch({ type: 'AUTH_ERROR' });
        } else {
          // Token is valid
          setAuthToken(token);
          const res = await api.get('/auth/me');
          dispatch({
            type: 'USER_LOADED',
            payload: res.data.data,
          });
        }
      } catch (err) {
        // Token is invalid (e.g., malformed)
        dispatch({ type: 'AUTH_ERROR' });
      }
    } else {
      // No token in storage
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  // Register User
  const register = async (formData) => {
    try {
      const res = await api.post('/auth/register', formData);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      return true; // Signal success
    } catch (err) {
      alert('Registration Failed: ' + (err.response?.data?.msg || 'Server Error'));
      dispatch({ type: 'REGISTER_FAIL' });
      return false; // Signal failure
    }
  };

  // Login User
  const login = async (formData) => {
    try {
      const res = await api.post('/auth/login', formData);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      return true; // Signal success
    } catch (err) {
      alert('Login Failed: ' + (err.response?.data?.msg || 'Invalid Credentials'));
      dispatch({ type: 'LOGIN_FAIL' });
      return false; // Signal failure
    }
  };

  // Logout
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
        logout,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};