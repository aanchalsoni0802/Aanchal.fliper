// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Save contact form submission
router.post('/', async (req, res) => {
  try {
    const contactData = new Contact(req.body);
    const savedContact = await contactData.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ message: 'Failed to save contact data' });
  }
});

// GET /api/contact - Fetch all contact form submissions for the admin panel
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contact data:', error);
    res.status(500).json({ message: 'Failed to fetch contact data' });
  }
});

module.exports = router;
