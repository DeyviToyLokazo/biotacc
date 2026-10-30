import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Landing page loaded eagerly for instant first paint
import Home from './pages/Home';

// Lazy-loaded pages for smaller initial bundle and faster load times
const About = lazy(() => import('./pages/About'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const Premium = lazy(() => import('./pages/Premium'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  // Solo mostrar el loader la primera vez que se entra a la web
  const [loading, setLoading] = useState(() => {
    if (sessionStorage.getItem('biotacc_loaded')) return false;
    return true;
  });

  const handleLoaderComplete = () => {
    sessionStorage.setItem('biotacc_loaded', '1');
    setLoading(false);
  };

  return (
    <>
      {loading && <PageLoader onComplete={handleLoaderComplete} />}
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/productos" element={<Catalog />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/contacto" element={<Contact />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default App;
