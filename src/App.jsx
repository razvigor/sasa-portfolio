import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { LanguageProvider } from './context/Language';

import Home from './pages/Home';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
