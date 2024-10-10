import { Lightbulb, LightbulbOff, MenuSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dark mode and save preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
              Hotelrev
            </a>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <MenuSquare />
            </button>
          </div>

          {/* Links Section */}
          <div className="hidden sm:flex space-x-8 items-center">
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 p-2 rounded"
            >
              {darkMode ? <Lightbulb/> : <LightbulbOff/>}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
            isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-4 text-center">
            <a href="#" className="block text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Home
            </a>
            <a href="#" className="block text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              About
            </a>
            <a href="#" className="block text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Services
            </a>
            <a href="#" className="block text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 p-2 rounded m-auto"
            >
              {darkMode ? <Lightbulb/> : <LightbulbOff/>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
