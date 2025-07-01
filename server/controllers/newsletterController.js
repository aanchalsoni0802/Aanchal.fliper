const Newsletter = require('../models/Newsletter');

exports.getAllSubscribers = async (req, res) => {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
}

exports.addSubscriber = async (req, res) => {
    const { email } = req.body;
    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.json({ message: 'Subscriber added successfully' });
}