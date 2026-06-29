import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../layout/Spinner';
import emailjs from '@emailjs/browser';

const HotelDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useContext(AuthContext);

    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState({
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
    });

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const res = await api.get(`/hotels/${id}`);
                console.log("Each hotel : ",res.data.data);
                setHotel(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchHotel();
    }, [id]);

    const onChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        try {
            await api.post('/bookings', {
                hotelId: id,
                ...booking,
            });



            try {
                const templateParams = {
                    to_name: user.name,       
                    to_email: user.email,     
                    hotel_name: hotel.name,   
                    destination: hotel.destination, 
                    check_in: new Date(booking.checkInDate).toLocaleDateString(),
                    check_out: new Date(booking.checkOutDate).toLocaleDateString(),
                    guests: booking.guests,
                    total_price: hotel.pricePerNight,
                };                
                await emailjs.send(
                    "service_losxj31",
                    "template_kga8f47",
                    templateParams,
                    "RQWiS-i7_SrC1vB3Q"
                );
                
                console.log('Confirmation email sent via EmailJS.');

            } catch (emailErr) {
                console.error('EmailJS failed to send:', emailErr);
            }



            alert('Booking successful!');
            navigate('/my-bookings');
        } catch (err) {
            alert('Booking failed: ' + err.response.data.msg);
        }
    };

    if (loading) return <Spinner />;
    if (!hotel) return <p>Hotel not found.</p>;

    return (
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl mt-6">
            <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="w-full h-96 object-cover rounded-xl mb-6"
            />

            <h2 className="text-3xl font-bold text-gray-800 mb-2">{hotel.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{hotel.destination}</p>

            <p className="text-gray-700 mb-6 leading-relaxed">{hotel.description}</p>

            {/* Booking */}
            {user && user.role === 'Customer' && (
                <form onSubmit={onSubmit} className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Book Your Stay</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                            <input
                                type="date"
                                name="checkInDate"
                                value={booking.checkInDate}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                            <input
                                type="date"
                                name="checkOutDate"
                                value={booking.checkOutDate}
                                onChange={onChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                            <input
                                type="number"
                                name="guests"
                                value={booking.guests}
                                onChange={onChange}
                                min="1"
                                required
                                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all"
                    >
                        Book Now
                    </button>
                </form>
            )}
        </div>

    );
};

export default HotelDetails;