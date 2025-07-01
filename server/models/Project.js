// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: Buffer, // Storing image as binary data
});

module.exports = mongoose.model('Project', projectSchema);
