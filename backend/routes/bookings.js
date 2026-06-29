const express = require('express');
const { createBooking, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const { isCustomer } = require('../middleware/roleMiddleware');

const router = express.Router();

// All booking routes are protected and for Customers only
router.use(protect, isCustomer);

router.route('/')
  .post(createBooking);

router.route('/mybookings')
  .get(getMyBookings);

module.exports = router;