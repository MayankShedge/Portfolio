// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          Mayank's Portfolio
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-black focus:outline-none transition-transform duration-300 transform hover:scale-110 cursor-pointer">
            ☰
          </button>
        </div>
        <div className={`md:flex items-center transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="about" smooth={true} duration={500} className="block md:inline-block text-black px-4 py-2 hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
            About Me
          </Link>
          <Link to="projects" smooth={true} duration={500} className="block md:inline-block text-black px-4 py-2 hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="block md:inline-block text-black px-4 py-2 hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
            Skills
          </Link>
          <Link to="blog" smooth={true} duration={500} className="block md:inline-block text-black px-4 py-2 hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
            Blog
          </Link>
          <Link to="contact" smooth={true} duration={500} className="block md:inline-block text-black px-4 py-2 hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
