const Hotel = require('../models/Hotel');

// @desc    Get all hotels (with filtering/recommendation)
// @route   GET /api/hotels
// @access  Public
exports.getHotels = async (req, res, next) => {
  try {
    let query = {};

    // Build query for "recommendation" engine
    // 1. Filter by destination
    if (req.query.destination) {
      query.destination = { $regex: req.query.destination, $options: 'i' };
    }

    // 2. Filter by budget (pricePerNight)
    if (req.query.minPrice || req.query.maxPrice) {
      query.pricePerNight = {};
      if (req.query.minPrice) {
        query.pricePerNight.$gte = req.query.minPrice;
      }
      if (req.query.maxPrice) {
        query.pricePerNight.$lte = req.query.maxPrice;
      }
    }
    
    // 3. Filter by amenities
    if (req.query.amenities) {
      const amenities = req.query.amenities.split(',');
      query.amenities = { $all: amenities };
    }

    // 4. Filter by travel context
    if (req.query.travelContext) {
      query.travelContext = { $in: req.query.travelContext.split(',') };
    }

    const hotels = await Hotel.find(query);
    res.status(200).json({ success: true, count: hotels.length, data: hotels });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
};

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ success: false, msg: 'Hotel not found' });
    }
    res.status(200).json({ success: true, data: hotel });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
};

// @desc    Create new hotel
// @route   POST /api/hotels
// @access  Private (Dealer only)
exports.createHotel = async (req, res, next) => {
  try {
    // Add dealer user to req.body
    req.body.dealer = req.user.id;

    const hotel = await Hotel.create(req.body);
    res.status(201).json({ success: true, data: hotel });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};

// @desc    Update hotel
// @route   PUT /api/hotels/:id
// @access  Private (Dealer only)
exports.updateHotel = async (req, res, next) => {
  try {
    let hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ success: false, msg: 'Hotel not found' });
    }

    // Make sure user is the hotel owner (dealer)
    if (hotel.dealer.toString() !== req.user.id) {
      return res.status(401).json({ success: false, msg: 'Not authorized to update this hotel' });
    }

    hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: hotel });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};

// @desc    Delete hotel
// @route   DELETE /api/hotels/:id
// @access  Private (Dealer only)
exports.deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ success: false, msg: 'Hotel not found' });
    }

    // Make sure user is the hotel owner
    if (hotel.dealer.toString() !== req.user.id) {
      return res.status(401).json({ success: false, msg: 'Not authorized to delete this hotel' });
    }

    await hotel.deleteOne(); // Use deleteOne() Mongoose document method

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server Error' });
  }
};