import React from 'react';
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Highlights from "./components/Highlights/Highlights.js";
import Testimonials from './components/Testimonials/Testimonials.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import 'antd/dist/reset.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Main />
      <Footer />
    </div>
  );
}

export default App;