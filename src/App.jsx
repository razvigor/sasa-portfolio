import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/Language';
import AppLoader from './components/AppLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHashElement from './components/ScrollToHashElement';
import MouseTracker from './components/MouseTracker';
import { StarsCanvas } from './components/canvas';
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Expirience = lazy(() => import('./components/Expirience'));
const Tech = lazy(() => import('./components/Tech'));
const Contact = lazy(() => import('./components/Contact'));
const Work = lazy(() => import('./components/Work'));
const Courses = lazy(() => import('./components/Courses'));

function App() {
  return (
    <LanguageProvider>
      <ScrollToHashElement />
      <MouseTracker />
      <Navbar />
      <Suspense fallback={<AppLoader />}>
        <Header />
        <About />
        <Expirience />
        <Tech />
        <Work />
        <Courses />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </Suspense>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
