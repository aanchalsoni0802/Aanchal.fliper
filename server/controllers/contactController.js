const Contact = require('../models/Contact');

// GET /api/clients
exports.getAllContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

// POST /api/clients
exports.addContact = async (req, res) => {
    const { fullName, email, mobile, city } = req.body;
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.json({ message: 'Contact added successfully' });
}