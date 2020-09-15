const mongoose = require('mongoose');
const db = require('../index.js');

const routesSchema = new mongoose.Schema({
  route_id: { type: Number, index: true, required: true },
  route_name: String,
  route_type: String,
  grade: String,
  rating: Number,
  pitches: Number,
  location: [String],
  description: String,
  photos: [
    {
      url: String,
    },
  ],
});

const Routes = mongoose.model('Routes', routesSchema);

module.exports = Routes;
