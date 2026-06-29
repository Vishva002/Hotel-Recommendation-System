import setAuthToken from '../services/setAuthToken'; // Make sure this path is correct

const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      // 1. Set token in localStorage for next page load
      localStorage.setItem('token', action.payload.token);
      
      // 2. THIS IS THE MISSING LINE: Set token for all future API requests
      setAuthToken(action.payload.token); 
      
      // 3. Update React state
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user, // Add this line to store the user
      };

    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
    case 'AUTH_ERROR':
    case 'LOGOUT':
      // 1. Remove token from localStorage
      localStorage.removeItem('token');
      
      // 2. Clear token from API headers
      setAuthToken(null); 
      
      // 3. Update React state
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
      
    default:
      return state;
  }
};

export default authReducer;
