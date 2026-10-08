import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Premium from './pages/Premium';
import Services from './pages/Services';

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
        </Layout>
      </Router>
    </>
  );
}

export default App;
