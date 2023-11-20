import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Text } from '../context/Language';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { courses } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const CourseCard = ({ course }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={course.date}
      iconStyle={{ background: course.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={course.icon}
            alt={course.title}
            className='w-[80%] h-[80%] rounded-full object-contain'
            loading='lazy'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{course.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {course.level}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <Text tid={course.point} />
      </ul>
    </VerticalTimelineElement>
  );
};

const Courses = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          <Text tid='courses-text' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='courses-title' />
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {courses.map((course, index) => (
            <CourseCard key={`course-${index}`} course={course} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Courses, '');
