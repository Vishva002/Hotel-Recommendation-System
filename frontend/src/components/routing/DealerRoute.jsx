import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../layout/Spinner';

const DealerRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (isAuthenticated && user && user.role === 'Dealer') {
    return children;
  }

  return <Navigate to="/" />;
};

export default DealerRoute;