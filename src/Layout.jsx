import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHashElement from './components/ScrollToHashElement';
import MouseTracker from './components/MouseTracker';

const Layout = () => {
  return (
    <>
      <ScrollToHashElement />
      <MouseTracker />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
