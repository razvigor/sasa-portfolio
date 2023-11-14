import { Suspense, lazy } from 'react';
//import Header from '../components/Header';
//import About from '../components/About';
//import Expirience from '../components/Expirience';
//import Tech from '../components/Tech';
//import Contact from '../components/Contact';
import { StarsCanvas } from '../components/canvas';
//import Work from '../components/Work';
import GearIcon from '@rsuite/icons/Gear';
const Header = lazy(() => import('../components/Header'));
const About = lazy(() => import('../components/About'));
const Expirience = lazy(() => import('../components/Expirience'));
const Tech = lazy(() => import('../components/Tech'));
const Contact = lazy(() => import('../components/Contact'));
const Work = lazy(() => import('../components/Work'));

const AppLoader = () => (
  <div className='fixed w-screen h-screen bg-primary z-50 flex justify-center items-center'>
    <GearIcon spin style={{ fontSize: '4em' }} />
  </div>
);
const Home = () => {
  return (
    <>
      <Suspense fallback={<AppLoader />}>
        <Header />
        <About />
        <Expirience />
        <Tech />
        <Work />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
