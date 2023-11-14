import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Text } from '../context/Language';

const ServiceCard = ({ index, id, icon }) => (
  <Tilt className='col-span-4 sm:col-span-2 xl:col-span-1'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          loading='lazy'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          <Text tid={id} />
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <Text tid='about-introduction' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='about-overview' />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <Text tid='aboute-text' />
      </motion.p>

      <div className='mt-20 grid grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
