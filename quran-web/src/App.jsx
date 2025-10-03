import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./Components/Navbar/Navbar"; 
import Home from "./Pages/Home/Home"
// import Event from "./Pages/Event/Event"
import AboutUs  from "./Pages/Aboutus/Aboutus";
import Programs  from "./Pages/Programs/Programs";
import ContactUs from "./Pages/Contactus/Contactus";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="event" element={<Event />} /> */}
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="programs" element={<Programs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="Services" element={<Services />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
