const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  Id: Number,
  Subject: String,
  Location: String,
  StartTime: Date,
  EndTime: Date,
});

module.exports = mongoose.model('Event', eventSchema);
