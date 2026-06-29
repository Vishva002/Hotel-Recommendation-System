import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, loading, user, logout } = useContext(AuthContext);

  const authLinks = (
    <Fragment>
      {user && user.role === 'Dealer' && (
        <li>
          <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        </li>
      )}
      {user && user.role === 'Customer' && (
        <li>
          <Link to="/my-bookings" className="hover:text-blue-300">My Bookings</Link>
        </li>
      )}
      <li>
        <span className="text-gray-300 hidden md:inline">| Hello, {user && user.name}</span>
      </li>
      <li>
        <a onClick={logout} href="#!" className="hover:text-blue-300">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login" className="hover:text-blue-300">Login</Link>
      </li>
      <li>
        <Link to="/register" className="hover:text-blue-300">Register</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Stay Out</Link>
        </h1>
        <ul className="flex space-x-4">
          {!loading && (isAuthenticated ? authLinks : guestLinks)}
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;