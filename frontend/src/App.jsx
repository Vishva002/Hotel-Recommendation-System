import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailsPage from './pages/DetailsPage';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/routing/PrivateRoute';
import DealerRoute from './components/routing/DealerRoute';
import ContactUs from './pages/ContactUs';

function App() { 
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/hotel/:id" element={<DetailsPage />} />
            <Route path="/contactus" element={<ContactUs/>}/>
            {/* Customer Private Routes */}
            <Route path="/my-bookings" element={
              <PrivateRoute>
                <BookingPage />
              </PrivateRoute>
            } />

            {/* Dealer Private Routes */}
            <Route path="/dashboard" element={
              <DealerRoute>
                <DashboardPage />
              </DealerRoute>
            } />

          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;