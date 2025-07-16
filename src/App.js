import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Highlights from "./components/Highlights/Highlights.js";
import Testimonials from './components/Testimonials/Testimonials.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking.js';
import 'antd/dist/reset.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

function App() {
   return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<Main />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;