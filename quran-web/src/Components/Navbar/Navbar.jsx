import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingBag } from "react-icons/fa";
import Loogo from "../../assets/loogo.png";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "programs", path: "/programs" },
    { name: "Contact us", path: "/contactus" },
    { name: "Services", path: "/services" },
    
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mb-[70px]">
      <nav className="container mx-auto h-[100px] flex justify-between items-center px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Loogo}
            alt="Lo0go"
            className="w-[130px] h-[130px] sm:w-[180px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 font-serif text-gray-900 text-[15px] tracking-wider">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 hover:text-[#0fb8cd] ${
                    isActive
                      ? "text-[#0fb8cd] font-semibold border-b-2 border-[#0fb8cd]"
                      : ""
                  }`
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons (Desktop only) */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-900">
          {/* Shopping Bag with badge */}
          <div className="relative cursor-pointer">
            <FaShoppingBag size={22} />
            <span className="absolute -top-2 -right-3 bg-[#0fb8cd] text-white text-xs rounded-full px-1.5 font-semibold">
              2
            </span>
          </div>

          {/* Search Icon */}
          <button className="cursor-pointer hover:text-[#0fb8cd] transition duration-300">
            <FaSearch size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>
       

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-[70px] left-0 w-full shadow-md z-40">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-base font-serif text-gray-900">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block transition duration-300 hover:text-[#0fb8cd] ${
                      isActive ? "text-[#0fb8cd] font-semibold" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)} 
                >
                  {link.name.toUpperCase()}
                </NavLink>
              </li>
            ))}

            {/* Mobile icons row */}
            <li className="flex space-x-6 mt-4">
              <div className="relative cursor-pointer">
                <FaShoppingBag size={22} />
                <span className="absolute -top-2 -right-3 bg-[#0fb8cd] text-white text-xs rounded-full px-1.5 font-semibold">
                  2
                </span>
              </div>
              <button className="cursor-pointer hover:text-[#0fb8cd] transition duration-300">
                <FaSearch size={20} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
