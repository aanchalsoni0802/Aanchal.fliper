// src/components/WhyChooseUs.js
import React from 'react';
import backgroundImage from '../assets/Images/Ellipse 11.svg';
import home from '../assets/Images/home.svg';
import paintBrush from '../assets/Images/paintbrush-2.svg';
import circle from '../assets/Images/circle-dollar-sign.svg';

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray-50 py-16 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-30 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-100 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-60 right-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 transform translate-x-1/2"></div>

      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">Not Your Average Realtor</h2>
            <p className="text-gray-600">
              Real estate experts for staging property, enhanced asset-selling design, and effective marketing to get the
              best value and top dollar on the market.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full bg-white p-4 shadow-lg overflow-hidden border-4 border-white">
              <img
                src={backgroundImage} // Replace with actual image path
                alt="Main Realtor"
                className="w-full h-full object-cover rounded-full"
              />

              
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Choose Us */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-2xl"><img src={home} alt="" /></i> {/* Replace with suitable icon */}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Potential ROI</h4>
              <p className="text-gray-600 text-center mt-2">
                We understand the value of achieving a strong return on investment and work to maximize potential ROI for
                all our clients.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-paint-brush text-2xl"><img src={paintBrush} alt="" /></i> {/* Replace with suitable icon */}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Design</h4>
              <p className="text-gray-600 text-center mt-2">
                Our team offers interior design to ensure that properties look their best and appeal to potential buyers.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bullhorn text-2xl"><img src={circle} alt="" /></i> {/* Replace with suitable icon */}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Marketing</h4>
              <p className="text-gray-600 text-center mt-2">
                Targeted marketing strategies to reach the right audience and showcase each property’s best features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
