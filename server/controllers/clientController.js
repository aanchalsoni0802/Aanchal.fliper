const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

exports.addClient = async (req, res) => {
    const { image, name, description, designation } = req.body;
    const client = new Client({ image, name, description, designation });
    await client.save();
    res.json({ message: 'Client added successfully' });
};