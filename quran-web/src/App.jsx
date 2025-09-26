import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./Components/Navbar/Navbar"; 
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Events";
import Service from "./pages/Service/Service";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="event" element={<Event />} />
        <Route path="service" element={<Service />} />
        <Route path="shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
