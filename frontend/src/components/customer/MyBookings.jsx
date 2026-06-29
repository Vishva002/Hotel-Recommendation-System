import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../layout/Spinner';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/bookings/mybookings');
        setBookings(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img src={booking.hotel.imageUrl} alt={booking.hotel.name} className="w-32 h-20 object-cover rounded" />
              <div>
                <h3 className="text-xl font-semibold">{booking.hotel.name}</h3>
                <p className="text-gray-600">{booking.hotel.destination}</p>
                <p><strong>Check-in:</strong> {new Date(booking.checkInDate).toLocaleDateString()}</p>
                <p><strong>Check-out:</strong> {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                <p><strong>Guests:</strong> {booking.guests}</p>
                <p><strong>Total Price:</strong> ₹{booking.hotel.pricePerNight}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;