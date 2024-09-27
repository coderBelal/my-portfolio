import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaClipboardList, FaCertificate, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='pt-8'>
      <nav className="p-6 h-16 flex items-center justify-center bg-[#10E956] text-white mx-auto max-w-fit  rounded-xl">
        {/* Navbar Links */}
        <ul className="flex space-x-8">
          <li className="flex items-center">
            <Link to="/" className="hidden md:flex text-lg">
              Home
            </Link>
            <Link to="/" className="md:hidden">
              <FaHome className="text-lg" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/skill" className="hidden md:flex text-lg">
              Skills
            </Link>
            <Link to="/skill" className="md:hidden">
              <FaStar className="text-lg" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/work" className="hidden md:flex text-lg">
              Projects
            </Link>
            <Link to="/work" className="md:hidden">
              <FaClipboardList className="text-lg" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/certificate" className="hidden md:flex text-lg">
              Certificate
            </Link>
            <Link to="/certificate" className="md:hidden">
              <FaCertificate className="text-lg" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/contact" className="hidden md:flex text-lg">
              Contact
            </Link>
            <Link to="/contact" className="md:hidden">
              <FaPhoneAlt className="text-lg" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
