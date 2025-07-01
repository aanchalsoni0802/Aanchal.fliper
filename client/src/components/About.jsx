// src/components/About.js
import React from 'react';

function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-600 relative mb-6">
            About Us
            {/* Underline */}
            <div className="h-1 w-16 bg-blue-600 mt-2 mx-auto"></div>
          </h2>
          
          {/* Paragraph */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Fifteen years of experience in real estate, excellent customer service, and a
            commitment to work hard, listen and follow through. We provide quality services to
            build relationships with clients and, more importantly, maintain those relationships
            by communicating effectively.
          </p>
          
          {/* Button */}
          <button className="mt-8 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-200">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>  
  );
}

export default About;
