// src/components/LandingHeaderFooter.js
import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/Images/Rectangle.svg';

const LandingHeaderFooter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/subscribers', { email });
      alert('Subscribed successfully');
      setEmail(''); // Clear the email input field
    } catch (error) {
      console.error('Error subscribing:', error);
      alert(error.response?.data?.message || 'Failed to subscribe.');
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Replace with actual image path
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 px-4">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          
          {/* Newsletter Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex items-center space-x-2">
            <span>Subscribe to:</span>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md text-gray-800"
              required
            />
            <button type="submit" className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>

        {/* Subscription message */}
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}

        {/* Bottom Footer Content */}
        <div className="border-t border-gray-400 mt-6 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; All Rights Reserved 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="" /></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" /></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" /></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingHeaderFooter;
