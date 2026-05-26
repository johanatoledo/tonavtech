import React from 'react';
import Hero from '../components/Hero';
import DynamicDescription from '../components/DynamicDescription'; // <-- Importamos el nuevo puente seguro
import Services from '../components/Services';
import Projects from '../components/Projects';
import Faq from '../components/FaQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      
      <DynamicDescription />
      
      <Services />
      <Projects />
      <Faq />
    </>
  );
}