const mongoose = require('mongoose');

const singleRouteSchema = new mongoose.Schema({
  route_id: { type: Number, index: true, required: true },
  route_name: String,
  route_type: String,
  grade: String,
  rating: Number,
  pitches: Number,
  location: String,
  description: String,
  photos: [
    {
      url: String,
    },
  ],
});

const SingleRoute = mongoose.mongoose.model('SingleRoute', singleRouteSchema);

module.exports = SingleRoute;
