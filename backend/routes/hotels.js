const express = require('express');
const {
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} = require('../controllers/hotelController');
const { protect } = require('../middleware/authMiddleware');
const { isDealer } = require('../middleware/roleMiddleware');

const router = express.Router();

router.route('/')
  .get(getHotels)
  .post(protect, isDealer, createHotel);

router.route('/:id')
  .get(getHotel)
  .put(protect, isDealer, updateHotel)
  .delete(protect, isDealer, deleteHotel);

module.exports = router;