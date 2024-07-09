const { getOrderHistoryFromDB } = require('../models/order.model');

exports.getOrderHistory = () => {
  return new Promise((resolve, reject) => {
    getOrderHistoryFromDB((err, orders) => {
      if (err) reject(err);
      else resolve(orders);
    });
  });
};
