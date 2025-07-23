import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import HeroSection from './ui/HeroSection/Hero';
import SpecialsSection from './ui/SpecialsSection/Highlights';
import TestimonialsSection from './ui/TestimonialsSection/Testimonials';
import AboutSection from './ui/AboutSection/About';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SpecialsSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;