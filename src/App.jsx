import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import GearIcon from '@rsuite/icons/Gear';
import { LanguageProvider } from './context/Language';

const Home = lazy(() => import('./pages/Home'));

const AppLoader = () => (
  <div className='fixed w-screen h-screen bg-primary z-50 flex justify-center items-center'>
    <GearIcon spin style={{ fontSize: '4em' }} />
  </div>
);
function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
