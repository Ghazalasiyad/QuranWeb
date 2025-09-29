import React from "react";
import Logo from "../../assets/logo.jpg"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="bg-[#000000] text-white pt-40 relative -mt-32 z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - Blog/Intro */}
        <div>
          <img src={Logo} alt="Logo" className="w-28 mb-4" />
          <p className="text-gray-300 leading-relaxed">
            Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu
            euismod. Egestas in morbi tristique ornare vulputate vitae enim.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Quran Memorization</li>
            <li>Special Child Care</li>
            <li>Mosque Development</li>
            <li>Charity & Donation</li>
            <li>Matrimonial</li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Event</li>
            <li>Donate</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col gap-4 rounded-lg p-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-200 bg-transparent border border-gray-600 rounded-md outline-none"
            />
            <button className="bg-yellow-600 px-6 py-3 font-semibold rounded-md hover:bg-yellow-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border & Copyright */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400">
        Copyright © 2023 Istiqbal by wpOceans. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
