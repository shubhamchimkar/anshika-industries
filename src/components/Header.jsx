import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 overflow-hidden font-mont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation and scroll to Home */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <motion.img
              src={logo}
              alt="Anshika Logo"
              className="h-[75px] w-auto object-contain"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden w-full bg-white px-6 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 font-medium text-left hover:text-blue-600 transition"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
