import React from 'react';
import { styles } from '../styles';
import Hero from '../assets/hero.svg';
import ComputersCanvas from './canvas/Computers';
import { Text } from '../context/Language';

const Header = () => {
  return (
    <header
      className={`relative w-full h-screen mx-auto before:block before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#05020c] before:to-[#4f2aa0]`}
    >
      <div
        className='absolute inset-0'
        style={{ backgroundImage: `url(${Hero})` }}
      ></div>
      <div
        className={`absolute inset-0 top-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-8 h-8 rounded-full bg-[#5271ff]' />
          <div className='w-1 h-40 sm:h-80 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Text tid='hero-title' />
            <span className='blue-text-gradient'>Saša</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Text tid='hero-text_01' /> <br className='sm:block hidden' />
            <Text tid='hero-text_02' />
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </header>
  );
};

export default Header;
