// src/components/Hero.js
import React from 'react';
// Import the background image directly
import backgroundImage from '../assets/Images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg';

function Hero() {
  return (
    <section
    className="bg-gray-100 py-60"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 0%', // adjust the vertical position
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Consultation, Design, & Marketing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We help you take your business to the next level.
          </p>
          <button className="mt-8 px-8 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
