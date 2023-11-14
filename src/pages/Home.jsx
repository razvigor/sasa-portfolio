import { Suspense, lazy } from 'react';
//import Header from '../components/Header';
//import About from '../components/About';
//import Expirience from '../components/Expirience';
//import Tech from '../components/Tech';
//import Contact from '../components/Contact';
import { StarsCanvas } from '../components/canvas';
//import Work from '../components/Work';
import AppLoader from '../components/AppLoader';
const Header = lazy(() => import('../components/Header'));
const About = lazy(() => import('../components/About'));
const Expirience = lazy(() => import('../components/Expirience'));
const Tech = lazy(() => import('../components/Tech'));
const Contact = lazy(() => import('../components/Contact'));
const Work = lazy(() => import('../components/Work'));

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
