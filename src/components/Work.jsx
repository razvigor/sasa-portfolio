import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Text } from '../context/Language';

const ProjectCard = ({ index, name, tags, image, duration }) => {
  return (
    <div className='col-span-6  md:col-span-3 lg:col-span-2'>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl'
        >
          <div className='relative w-full h-[260px] group overflow-hidden'>
            <img
              src={image}
              alt='project_image'
              loading='lazy'
              className={`w-full h-auto absolute left-0 object-cover rounded-2xl group-hover:-translate-y-full transition-all ${duration} ease-in-out`}
            />
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          <Text tid='work-text' />
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          <Text tid='work-title' />
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <Text tid='work-content' />
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-6 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
