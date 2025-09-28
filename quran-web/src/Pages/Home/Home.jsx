import React from "react";
import Icon from "../../assets/icon.jpg";
import Mosque from "../../assets/mosque.jpg";
import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/about2.jpg"; 
import Shahada from "../../assets/Shahada.jpg"; 
import Salah from "../../assets/Salah.jpg";
import Sawm from "../../assets/Sawm.jpg"; 
import Zakah from "../../assets/zakah.jpg";
import Hajj from "../../assets/haj.jpg";
import Card from "../../Components/Card/Card" 
import BlogCard from "../../Components/BlogCard/BlogCard" 
import Quran from "../../assets/quran.jpg"  
import Child from "../../assets/child.jpg" 
import Development from "../../assets/development.jpg" 
import Charity from "../../assets/charity.jpg" 
import Matrimonial from "../../assets/matrimonial.jpg" 
import Funeral from "../../assets/funerals.jpg" 
import Blog1 from "../../assets/blog1.jpg" 
import Blog2 from "../../assets/blog2.jpg" 
import Blog3 from "../../assets/blog3.jpg"
import Logo from "../../assets/logo.jpg"; 
import EventSlider from "../../Components/Eventslider/Eventslider";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
const Home = () => {
   const cardsData = [
    {
      number: "01",
      icon: Quran,
      title: "Quran Memorization",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
    {
      number: "02",
      icon: Child,
      title: "Special Child Care",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
    {
      number: "03",
      icon: Development,
      title: "Mosque Development",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
    {
      number: "04",
      icon: Charity,
      title: "Charity & Donation",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
    {
      number: "05",
      icon: Matrimonial,
      title: "Matrimonial",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
    {
      number: "06",
      icon: Funeral,
      title: "Funerals",
      description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
      buttonText: "Read More...",
    },
  ];
   const blogs = [
    {
      image: Blog1,
      date: "Sep 03, 2021",
      author: "Anne William",
      title: "How to Teach Kids Ramadan Isn’t about Food",
    },
    {
      image: Blog2,
      date: "Sep 05, 2021",
      author: "Anne William",
      title: "The Importance of Marriage in Islam.",
    },
    {
      image: Blog3,
      date: "Sep 10, 2021",
      author: "Anne William",
      title: "Five Groups of People during Ramadan",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f8f8f8] bg-cover bg-center rounded-[80px] m-10 mt-20">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-6 py-16">
          {/* Left Side - Text */}
          <div className="ml-20">
            {/* Icon*/}
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src={Icon}
                alt="Icon"
                className="w-[80px] h-auto sm:w-[100px]"
              />
            </div>

            {/* Quote */}
            <h2 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
              “TURN TO ALLAH <br /> BEFORE YOU RETURN <br /> TO ALLAH.”
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-gray-700 text-lg max-w-xl leading-7">
              The Heart That Beats For Allah Is Always A Stranger Among <br />{" "}
              The Hearts That Beat For The Dunya (World).
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-700 transition">
                Discover More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end mt-10 mr-10">
            <img
              src={Mosque}
              alt="Mosque"
              className="rounded-3xl shadow-lg w-[500px] sm:w-[570px]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left side - Images */}
          <div className="relative flex justify-center md:justify-start">
            {/* Large Image */}
            <img
              src={About1}
              alt="Mosque 1"
              className="rounded-3xl w-[350px] sm:w-[450px] shadow-lg"
            />
            {/* Small Image - overlay */}
            <img
              src={About2}
              alt="Mosque 2"
              className="absolute -bottom-10 -right-1 rounded-3xl w-[200px] sm:w-[260px] shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-yellow-600 font-semibold">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug font-serif">
              Welcome to Isteqbal <br /> Islamic Center for Muslims
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Eget leo hac mauris aliquam
              luctus ut nascetur. Nunc sit odio tempor massa dui non. Quam nisi
              sagittis non tincidunt. Eu dolor gravida mattis sagittis aliquet eu
              tellus maecenas. Nisi a mattis ultrices id arcu massa nec leo non.
              Eget pretium nam felis eget varius faucibus velit. Malesuada
              facilisis habitasse eget tellus tristique turpis scelerisque lacus.
              Habitant vivamus ut et augue. Non id amet ut luctus consequat
              egestas id nunc.
            </p>

            {/* Button  */}
            <div className="mt-8  flex flex-col sm:flex-row items-center gap-6">
              {/* Button */}
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-700 transition">
                Discover More
              </button>

              {/* Call Info */}
              <div className="flex items-center gap-3">
                <div className="text-yellow-600 text-3xl">📞</div>
                <div>
                  <p className="text-gray-700">Call Us:</p>
                  <p className="text-lg font-bold text-gray-900">
                    +(684) 555-0102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PIllars Section */}
     
     <section className="bg-[#f8f8f8] bg-cover bg-center py-16 mt-20">
  {/* text */}
  <div className="text-center mb-12">
    <p className="text-yellow-600 text-xl">Islam pillars</p>
    <h2 className="text-3xl md:text-5xl font-semibold">FIVE PILLARS OF ISLAM</h2>
  </div>

  {/* images section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-6">
    <div className="text-center">
      <img
        src={Shahada}
        alt="Shahada"
        className="w-[200px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">SHAHADAH</h2>
    </div>

    <div className="text-center">
      <img
        src={Salah}
        alt="Salah"
        className="w-[200px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">SALAH</h2>
    </div>

    <div className="text-center">
      <img
        src={Sawm}
        alt="Sawm"
        className="w-[200px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">SAWM</h2>
    </div>

    <div className="text-center">
      <img
        src={Zakah}
        alt="Zakah"
        className="w-[200px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">ZAKAH</h2>
    </div>

    <div className="text-center">
      <img
        src={Hajj}
        alt="Hajj"
        className="w-[200px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">HAJJ</h2>
    </div>
  </div>
</section>


      {/* Service section */}
<section> {/* text */} <div className="pt-10"> <p className="text-yellow-600 text-center text-xl">Our Services</p> <h2
 className="text-center text-5xl font-semibold">OUR SERVICES FOR HUMANITY</h2> </div> <div className="container mx-auto 
 grid md:grid-cols-3 gap-8 mt-20"> {cardsData.map((card, index) => ( <Card key={index} number={card.number} icon={card.icon} title={card.title} 
description={card.description} buttonText={card.buttonText} /> ))} </div> </section>





{/* SUPPORT SECTION */}
<section className="px-4 sm:px-6 lg:px-8">
  <div className="bg-[url('/Shahada.jpg')] bg-cover bg-center h-auto rounded-xl mt-10 sm:mt-20 flex items-center">
    <div className="m-6 sm:m-12 md:m-20 py-10">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug sm:leading-tight">
        Support us, <br />
        we need your help.
      </h1>

      {/* Paragraph */}
      <p className="text-white mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        May Allah bless you! Thank you. Those who (in charity) spend of their goods
        by night and by day, in secret and in public, have their reward with their Lord.
      </p>

      {/* Button */}
      <button className="mt-6 bg-yellow-600 text-white px-6 sm:px-8 md:px-10 py-3 rounded-lg font-medium hover:bg-yellow-700 transition">
        Donate Now
      </button>
    </div>
  </div>
</section>


 <EventSlider />



{/* Blog Section */}
<section className="py-16 px-6 relative z-20">
  <div className="pt-10">
    <p className="text-yellow-600 text-center text-xl">Our Blog</p>
    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
      OUR LATEST NEWS
    </h2>
  </div>

  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
    {blogs.map((blog, index) => (
      <BlogCard key={index} {...blog} />
    ))}
  </div>
</section>

{/* Prayer Timings */}
<section className="bg-yellow-600 rounded-4xl m-6 sm:m-10 lg:m-20 py-10 sm:py-16 relative z-20">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-white">
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Fajar</h2>
      <h3 className="text-base sm:text-lg">4:10 am</h3>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Sunrise</h2>
      <h3 className="text-base sm:text-lg">5:50 am</h3>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Zhuhr</h2>
      <h3 className="text-base sm:text-lg">12:36 pm</h3>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Asr</h2>
      <h3 className="text-base sm:text-lg">4:15 pm</h3>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Maghrib</h2>
      <h3 className="text-base sm:text-lg">6:15 pm</h3>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold uppercase">Isha</h2>
      <h3 className="text-base sm:text-lg">8:30 pm</h3>
    </div>
  </div>
</section>


{/* Footer */}
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
        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
          <FaTwitter />
        </a>
        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
          <FaInstagram />
        </a>
        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-600 transition">
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

    </>
  );
};

export default Home;
