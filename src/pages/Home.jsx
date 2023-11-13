import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Expirience from '../components/Expirience';
import Tech from '../components/Tech';
import Contact from '../components/Contact';
import { StarsCanvas } from '../components/canvas';
import Work from '../components/Work';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Expirience />
      <Tech />
      <Work />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
