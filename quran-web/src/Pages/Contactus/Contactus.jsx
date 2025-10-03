import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Name*
            </label>
            <input
              type="text"
              name="fullName"
              placeholder=""
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              service Interested*
            </label>
            <input
              type="tel"
              name="phone"
              placeholder=""
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Country*
            </label>
             <input
              type="tel"
              name="phone"
              placeholder=""
              value={formData.country}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0fb8cd] text-white py-3 rounded-md "
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
