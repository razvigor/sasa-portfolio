import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  poligon,
  ring,
  slicering,
  conoid,
  triangle,
  logo,
  ball,
  cilindar,
  cube,
  halfring,
  squarering,
  infoars,
  itexpert,
  assa,
  lesnina,
  martina,
  tranexpo,
  turbosavic,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
  },
  {
    id: 'work',
  },
  {
    id: 'contact',
  },
];

const services = [
  {
    id: 'about-ui',
    icon: poligon,
  },
  {
    id: 'about-performance',
    icon: triangle,
  },
  {
    id: 'about-seo',
    icon: slicering,
  },
  {
    id: 'about-responsive',
    icon: conoid,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Infoars',
    icon: infoars,
    iconBg: '#E6DEDD',
    date: '2016 – 2019',
    point: 'infoars',
  },
  {
    title: 'React Developer',
    company_name: 'IT Expert',
    icon: itexpert,
    iconBg: '#383E56',
    date: ' 2019 – 2022',
    point: 'itexpert',
  },
  {
    title: 'React Developer',
    company_name: 'Freelancer',
    icon: logo,
    iconBg: '#383E56',
    date: '2022 - Present',
    point: 'freelancer',
  },
];

const projects = [
  {
    name: 'Martina Đokić',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4500',
    image: martina,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Lesnina',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4000',
    image: lesnina,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Assa',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'javaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4000',
    image: assa,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Tranexpo',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-2500',
    image: tranexpo,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Turbo Savić',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-3000',
    image: turbosavic,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, projects };
