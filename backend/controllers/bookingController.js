const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Private (Customer only)
exports.createBooking = async (req, res, next) => {
  try {
    const { hotelId, checkInDate, checkOutDate, guests } = req.body;

    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ success: false, msg: 'Hotel not found' });
    }

    // Simple price calculation
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) {
      return res.status(400).json({ success: false, msg: 'Check-out date must be after check-in date' });
    }

    const totalPrice = nights * hotel.pricePerNight * guests;

    const booking = await Booking.create({
      user: req.user.id,
      hotel: hotelId,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    });

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};

// @desc    Get user's bookings
// @route   GET /api/bookings/mybookings
// @access  Private (Customer only)
exports.getMyBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('hotel');
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
};