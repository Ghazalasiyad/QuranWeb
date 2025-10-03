import React from "react";
import Logo from "../../assets/loogo.png"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="bg-[#000000] text-white pt-40 relative -mt-32 z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - Blog/Intro */}
        <div>
          <img src={Logo} alt="Logo" className="w-28" />
          <p className="text-gray-300 leading-relaxed">
                         Comprehensive exam prep, visa guidance, and job placement for healthcare professionals. Or World-class support for exams, visas, <br/> and placements in the USA

          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#0fb8cd] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#0fb8cd] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#0fb8cd] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#0fb8cd] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Online Consultation</li>
            <li>Appointment Assistance</li>
            <li>Exam Preparation</li>
            <li>Job Placement Services</li>
            <li>Ongoing Mentorship</li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>programs</li>
            <li>Contact Us</li>
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
            <button className="bg-[#0fb8cd] px-6 py-3 font-semibold rounded-md hover:bg-yellow-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border & Copyright */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400">
        © 2023 Apex MediLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
