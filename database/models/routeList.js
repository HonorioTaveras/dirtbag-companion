const mongoose = require('mongoose');

const routeListSchema = new mongoose.Schema({
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

const RouteList = mongoose.model('RouteList', routeListSchema);

module.exports = RouteList;
