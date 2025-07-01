import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from "../assets/Images/logo.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between text-sm py-4 px-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x text-white shadow-md">
      <img src={logo} alt="logo" style={{ width: "150px" }} />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li className="py-1">
          <a href="#hero">Home</a>
        </li>
        <li className="py-1">
          <a href="#about">About</a>
        </li>
        <li className="py-1">
          <a href="#projects">Projects</a>
        </li>
        <li className="py-1">
          <a href="#clients">Clients</a>
        </li>
        <li className="py-1">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
          Create account
        </button>
        
        {/* Link to Admin Panel */}
        <Link to="/admin">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Admin Panel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
