const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: Buffer },  // Image stored as binary data
});

module.exports = mongoose.model('Client', clientSchema);
