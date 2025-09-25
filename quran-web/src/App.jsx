

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Event from './pages/Events/Events';
import Service from "./Pages/Service/Service";
import Shop from "./Pages/Shop/Shop";
import Pages from "./Pages/Pages/Pages";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="service" element={<Service />} />
          <Route path="shop" element={<Shop />} /> 
          <Route path="pages" element={<Pages />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
