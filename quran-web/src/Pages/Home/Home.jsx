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
import Quran from "../../assets/quran.jpg"  
import Child from "../../assets/child.jpg" 
import Development from "../../assets/development.jpg" 
import Charity from "../../assets/charity.jpg" 
import Matrimonial from "../../assets/matrimonial.jpg" 
import Funeral from "../../assets/funerals.jpg" 
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
     
      <section className="bg-[#f8f8f8] bg-cover bg-center h-[80vh] mt-20">
{/* text */}
<div className="pt-10">
  
  <p className="text-yellow-600 text-center text-xl">Islam pillars</p>
  <h2 className="text-center text-5xl font-semibold">Five Pillars of Islam</h2>
</div>

{/* images section */}
<div className="flex gap-10 mt-20 justify-center m-10">
  <div>
    <img src={Shahada}
     alt="Shahada" 
     className="w-[200px] sm:w-[270px] rounded-4xl"/>
     <h2 className="text-center text-4xl mt-2 font-semibold">SHAHADAH</h2>
     
  </div>
  
  <div><img src={Salah}
     alt="Salah" 
     className="w-[200px] sm:w-[270px] rounded-4xl"/>
     <h2 className="text-center text-4xl mt-2 font-semibold">SALAH</h2></div>
  <div><img src={Sawm}
     alt="Sawm" 
     className="w-[200px] sm:w-[270px] rounded-4xl"/>
     <h2 className="text-center text-4xl mt-2 font-semibold">SAWM</h2></div>
  <div><img src={Zakah}
     alt="Zakah" 
     className="w-[200px] sm:w-[270px] rounded-4xl"/>
     <h2 className="text-center text-4xl mt-2 font-semibold">ZAKAH</h2></div>
    <div>
<img src={Hajj}
     alt="Hajj" 
     className="w-[200px] sm:w-[270px] rounded-4xl"/>
     <h2 className="text-center text-4xl mt-2 font-semibold">HAJJ</h2>
</div>
</div>
      </section>

      {/* Service section */}
      <section>
      {/* text */}
<div className="pt-10">
  
  <p className="text-yellow-600 text-center text-xl">Our Services</p>
  <h2 className="text-center text-5xl font-semibold">Our Services for Humanity</h2>
</div>
   <div className="container mx-auto grid md:grid-cols-3 gap-8 mt-20">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
</section>
    </>
  );
};

export default Home;
