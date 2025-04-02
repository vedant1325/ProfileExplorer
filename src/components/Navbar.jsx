import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-gray-800">
          Profile<span className="text-blue-600">Explorer</span>
        </Link>

        {/* Desktop Menu */}
        <div className=" flex items-center hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/profiles" className="text-gray-700 hover:text-blue-600 transition">Profiles</Link>
          <Link 
            to="/admin"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Admin Panel
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/profiles" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Profiles</Link>
            <Link 
              to="/admin"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
