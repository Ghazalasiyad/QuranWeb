import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./Components/Navbar/Navbar"; 
import Home from "./Pages/Home/Home"
// import Event from "./Pages/Event/Event"
import Service from "./Pages/Service/Service";
import Shop from "./pages/Shop/Shop";
import Page from "./Pages/Page/Page";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="event" element={<Event />} /> */}
        <Route path="events" element={<Events />} />
        <Route path="service" element={<Service />} />
        <Route path="shop" element={<Shop />} />
        <Route path="page" element={<Page />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
