import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import ComputersCanvas from './canvas/Computers';
import { Text } from '../context/Language';

const Header = () => {
  return (
    <header
      className={`relative w-full h-screen mx-auto before:block before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#05020c] before:to-[#4f2aa0]`}
    >
      <div className='absolute inset-0 bg-header-bg bg-cover bg-no-repeat bg-center'></div>
      <div
        className={`absolute inset-0 top-[120px] 2xl:top-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
      <div className='absolute xs:bottom-6 bottom-24 w-full flex justify-center items-center'>
        <a href='#about' aria-label='Read more about Sasa'>
          <div className='w-[48px] h-[64px] rounded-3xl border-2 border-[#5271ff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-[#5271ff] mb-1'
            />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
