import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/subscribers', { email });
      alert('Subscribed successfully');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert(error.response?.data?.message || 'Failed to subscribe.');
    }
  };
  

  return (
    <div className="subscribe-form my-8 max-w-md mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default SubscribeForm;
