const express = require('express');
const multer = require('multer');
const Client = require('../models/Client');
const router = express.Router();

// Set up multer storage for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/clients - Add a new client
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const imageBuffer = req.file ? req.file.buffer : null;  // Handle the image upload

    const newClient = new Client({
      name,
      description,
      designation,
      image: imageBuffer,  // Store the image as Buffer in MongoDB
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);  // Respond with saved client details
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({ message: 'Error adding client', error: error.message });
  }
});

// GET /api/clients - Fetch all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find({});
    const clientsWithBase64Images = clients.map((client) => ({
      ...client.toObject(),
      image: client.image ? client.image.toString('base64') : null,  // Convert image Buffer to Base64
    }));
    res.json(clientsWithBase64Images);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Error fetching clients', error });
  }
});

module.exports = router;
