import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/Language';
import AppLoader from './components/AppLoader';

const Home = lazy(() => import('./pages/Home'));
const Layout = lazy(() => import('./Layout'));

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
