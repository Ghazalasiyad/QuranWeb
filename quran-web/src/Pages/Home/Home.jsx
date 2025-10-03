import React from "react";
import Icon from "../../assets/loogo.png";
import Hero from "../../assets/hero.jpg";
import Aboutus1 from "../../assets/aboutt1.jpg";
import Aboutus2 from "../../assets/aboutus2.png"; 
import supportbg from "../../assets/supportbg.jpg"; 
import Visa from "../../assets/visa.jpg";
import Placement from "../../assets/placement.png"; 
import Testassistance from "../../assets/testassistance.png";
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
import CounterList from "../../Components/Counter/Counterlist";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/Contactform/Contactform";
const Home = () => {
   const cardsData = [
    {
      number: "01",
      icon: Quran,
      title: "Doctors Program",
      description: "The Doctors Program at Apex MediLink is designed for international physicians who aspire to practice medicine in the United States. It offers complete support throughout the journey — from preparation for medical licensing exams to visa guidance and job placement. With expert mentorship and personalized assistance, the program ensures doctors are well-prepared to advance their careers and succeed in the U.S. healthcare system",
      buttonText: "Read More...",
    },
    {
      number: "02",
      icon: Child,
      title: "Nurses Program",
      description: "The Nurses Program at Apex MediLink is designed for international registered nurses who want to build their careers in the United States. It provides everything you need — from licensing exam preparation to job placement and visa support.+",
      buttonText: "Read More...",
    },
    // {
    //   number: "03",
    //   icon: Development,
    //   title: "Mosque Development",
    //   description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
    //   buttonText: "Read More...",
    // },
    // {
    //   number: "04",
    //   icon: Charity,
    //   title: "Charity & Donation",
    //   description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
    //   buttonText: "Read More...",
    // },
    // {
    //   number: "05",
    //   icon: Matrimonial,
    //   title: "Matrimonial",
    //   description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
    //   buttonText: "Read More...",
    // },
    // {
    //   number: "06",
    //   icon: Funeral,
    //   title: "Funerals",
    //   description: "Betus acipsum srci fusid commod atutro. Enim facilisis donec gomdo enyn. Digsim amet feugiat nec proin lacinia..",
    //   buttonText: "Read More...",
    // },
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
      <section className="bg-[#f8f8f8] bg-cover bg-center rounded-[80px] m-10 mt-35">
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
              Your Pathway to a Medical Career <br/> in the USA
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-gray-700 text-lg max-w-xl leading-7">
             Comprehensive exam prep, visa guidance, and job placement for healthcare professionals. Or World-class support for exams, visas, <br/> and placements in the USA
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-[#0fb8cd] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-700 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end mt-10 mr-10">
            <img
              src={Hero}
              alt="Hero"
              className="rounded-3xl shadow-lg h-[650px] sm:w-[570px]"
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
              src={Aboutus1}
              alt="Mosque 1"
              className="rounded-3xl w-[350px] h-[480px] sm:w-[450px] shadow-lg"
            />
            {/* Small Image - overlay */}
            <img
              src={Aboutus2}
              alt="Mosque 2"
              className="absolute -bottom-10 -right-1 rounded-3xl w-[200px] h-[300px] sm:w-[260px] shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug font-serif">
             About Us
            </h2>
            
            <p className="mt-6 text-[#0fb8cd] font-semibold leading-relaxed">
              Who we are
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">Apex MediLink, under Rupani Development Initiatives, is a global healthcare support institute. We empower doctors, nurses, pharmacists, and technicians to achieve their dreams of working in the USA through exam preparation,
               visa assistance, and job placements..</p>
            
            <p className="mt-6 text-[#0fb8cd] font-semibold leading-relaxed">
              Our Mission
            </p>
            <p className="text-gray-700"> To empower healthcare professionals worldwide with ethical,
               impactful employment opportunities in advanced healthcare systems.</p>
            <p className="mt-6 text-[#0fb8cd] font-semibold leading-relaxed">
              Our Vision
            </p>
            <p className="text-gray-700">To become a trusted global bridge connecting skilled health professionals from developing 
              nations with opportunities in advanced healthcare systems, fostering inclusive growth, 
              dignity in migration, and better health outcomes worldwide.</p>

            {/* Button  */}
            <div className="mt-8  flex flex-col sm:flex-row items-center gap-6">
              {/* Button */}
              <button className="bg-[#0fb8cd] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-700 transition">
               Read More
              </button>

              {/* Call Info */}
              <div className="flex items-center gap-3">
                <div className="text-[#e9d8b1] text-3xl">📞</div>
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
    <h2 className="text-3xl md:text-5xl font-semibold">Key Highlights</h2>
  </div>

  {/* images section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 justify-center">
    <div className="text-center">
      <img
        src={Testassistance}
        alt="TestAssistance"
        className="w-[200px] h-[300px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">Exam/Certification Preparation Assistance</h2>
    </div>

    <div className="text-center">
      <img
        src={Visa}
        alt="visa"
        className="w-[200px] h-[300px]  sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">Visa Assistance</h2>
    </div>

    <div className="text-center">
      <img
        src={Placement}
        alt="Placement"
        className="w-[200px] h-[300px] sm:w-[270px] mx-auto rounded-3xl"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">Placement Assistance</h2>
    </div>
  </div>
</section>



      {/* Service section */}
<section>  <div className="pt-10"> <h2
 className="text-center text-5xl font-semibold">OUR PROGRAMS</h2> </div> <div className="container mx-auto 
 grid md:grid-cols-2 gap-8 mt-20"> {cardsData.map((card, index) => ( <Card key={index} number={card.number} icon={card.icon} title={card.title} 
description={card.description} buttonText={card.buttonText} /> ))} </div> </section>





{/* SUPPORT SECTION */}
<section className="px-4 sm:px-6 lg:px-8 w-full">
  <div className="bg-[url('/supportbg.jpg')] bg-cover bg-center w-full h-auto rounded-xl mt-10 sm:mt-20 flex items-center">
    <div className="m-6 sm:m-12 md:m-20 py-10">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug sm:leading-tight">
        Support Our Mission, Empower <br/> Doctors Worldwide
      </h1>

      {/* Paragraph */}
      <p className="text-white mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
       We support international doctors with exam preparation, visa guidance, and job placement, helping them build <br/> successful medical careers in the United States.
      </p>
      <CounterList/>

      {/* Button */}
      <button className="mt-6 bg-[#0fb8cd] text-white px-6 sm:px-8 md:px-10 py-3 rounded-lg font-medium hover:bg-[#e9d8b1] transition">
        Learn more
      </button>
    </div>
  </div>
</section>


 {/* <EventSlider /> */}
 {/* <ContactForm/> */}



{/* Blog Section */}
{/* <section className="py-16 px-6 relative z-20">
  <div className="pt-10">
    <p className="text-[#e9d8b1] text-center text-xl">Our Blog</p>
    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
      OUR LATEST NEWS
    </h2>
  </div>

  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
    {blogs.map((blog, index) => (
      <BlogCard key={index} {...blog} />
    ))}
  </div>
</section> */}

{/* Prayer Timings */}
<section className="bg-[#e9d8b1]0 rounded-4xl m-6 sm:m-10 lg:m-20 py-10 sm:py-16 relative z-20">
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


<Footer/>

    </>
  );
};

export default Home;
