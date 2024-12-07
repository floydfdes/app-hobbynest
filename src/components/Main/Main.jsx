import './Main.scss';

import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import FeatureCard from './FeatureCard';
import FeatureList from './FeatureList';
import HeroSection from './HeroSection';

function Main() {
  return (
    <>
      <HeroSection />
      <FeatureCard />
      <FeatureList />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
