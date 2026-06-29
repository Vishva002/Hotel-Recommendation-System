const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  dealer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a hotel name'],
    trim: true,
  },
  destination: {
    type: String,
    required: [true, 'Please add a destination (city, country)'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please add a price per night'],
  },
  amenities: {
    type: [String],
    enum: ['WiFi', 'Pool', 'Gym', 'Parking', 'AC', 'Pet Friendly'],
  },
  travelContext: {
    type: [String],
    enum: ['Business', 'Family', 'Romantic', 'Solo'],
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/400x250.png?text=Hotel+Image',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);