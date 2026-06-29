exports.isDealer = (req, res, next) => {
  if (req.user.role !== 'Dealer') {
    return res.status(403).json({
      success: false,
      msg: 'User role "Customer" is not authorized to access this route',
    });
  }
  next();
};

exports.isCustomer = (req, res, next) => {
  if (req.user.role !== 'Customer') {
    return res.status(403).json({
      success: false,
      msg: 'User role "Dealer" is not authorized to access this route',
    });
  }
  next();
};