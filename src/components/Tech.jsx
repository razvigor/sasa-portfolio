import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { Text } from '../context/Language';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <Text tid='tech-text' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='tech-title' />
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-12'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
