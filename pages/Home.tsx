import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import SearchLogos from '../components/SearchLogos';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <SearchLogos />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;