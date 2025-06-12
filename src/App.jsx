import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import StrapSpecification from './components/StrapSpecification';

const App = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <About />
      <Products />
      <StrapSpecification/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
