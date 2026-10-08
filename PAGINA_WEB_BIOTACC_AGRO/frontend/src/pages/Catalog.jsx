import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryAccordion from '../components/CategoryAccordion';
import { products, CATEGORY_STRUCTURE } from '../data/products';
import { 
  FaBox, 
  FaFilter, 
  FaTimes, 
  FaChevronDown, 
  FaChevronUp, 
  FaSeedling,
  FaLayerGroup
} from 'react-icons/fa';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import '../styles/Catalog.css';

const Typewriter = ({ text, delay = 80 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setShowCursor(false);
    }
  }, [currentIndex, delay, text, isInView]);

  return (
    <span ref={ref}>
      {currentText}
      <span className={`cursor ${showCursor ? 'blink' : 'hidden'}`}>|</span>
    </span>
  );
};

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtener estado inicial desde URL si existe
  const initialCat = searchParams.get('categoria') || null;
  const initialSub = searchParams.get('subcategoria') || null;

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSub);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sincronizar cambios en los filtros con los parámetros URL
  const updateFilters = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);

    const newParams = {};
    if (category) newParams.categoria = category;
    if (subcategory) newParams.subcategoria = subcategory;
    setSearchParams(newParams);
  };

  const handleSelectCategory = (catName) => {
    updateFilters(catName, null);
    // En móviles, cerrar tras seleccionar para ver los productos
    if (window.innerWidth < 992) {
      setIsMobileFiltersOpen(false);
    }
  };

  const handleSelectSubcategory = (catName, subcatName) => {
    updateFilters(catName, subcatName);
    // En móviles, cerrar tras seleccionar para ver los productos
    if (window.innerWidth < 992) {
      setIsMobileFiltersOpen(false);
    }
  };

  const handleClearFilters = () => {
    updateFilters(null, null);
    if (window.innerWidth < 992) {
      setIsMobileFiltersOpen(false);
    }
  };

  // Conteo dinámico de productos por categoría y subcategoría
  const productCounts = useMemo(() => {
    const byCategory = {};
    const bySubcategory = {};

    CATEGORY_STRUCTURE.forEach(cat => {
      byCategory[cat.name] = products.filter(p => p.category === cat.name).length;
      cat.subcategories.forEach(sub => {
        bySubcategory[sub] = products.filter(p => p.subcategory === sub).length;
      });
    });

    return {
      total: products.length,
      byCategory,
      bySubcategory
    };
  }, []);

  // Filtrado de productos según categoría y subcategoría seleccionadas
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory]);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="catalog-page section container">
      {/* Título de la página */}
      <div className="catalog-header-wrap text-center">
        <h1 className="page-title">
          <FaBox className="title-icon" /> <Typewriter text="Nuestros Productos" delay={75} />
        </h1>
        <p className="catalog-subtitle">
          Soluciones agrícolas de alta calidad y rendimiento para nutrir y proteger tus cultivos.
        </p>
      </div>

      {/* Botón flotante / trigger para móviles */}
      <div className="mobile-filter-trigger-wrap">
        <button 
          type="button"
          className={`mobile-filter-trigger-btn ${isMobileFiltersOpen ? 'open' : ''}`}
          onClick={() => setIsMobileFiltersOpen(prev => !prev)}
          aria-expanded={isMobileFiltersOpen}
        >
          <div className="trigger-left">
            <FaFilter className="trigger-icon" />
            <span className="trigger-text">
              {selectedSubcategory 
                ? `Filtro: ${selectedSubcategory}` 
                : selectedCategory 
                  ? `Filtro: ${selectedCategory}` 
                  : 'Filtrar por categorías'}
            </span>
            {(selectedCategory || selectedSubcategory) && (
              <span className="trigger-badge">Activo</span>
            )}
          </div>
          <span className="trigger-icon-arrow">
            {isMobileFiltersOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
      </div>

      {/* Layout principal con Acordeón Lateral y Grilla de Productos */}
      <div className="catalog-layout">
        {/* Panel Acordeón Lateral (Sticky en desktop, desplegable en móvil) */}
        <div className={`catalog-sidebar ${isMobileFiltersOpen ? 'mobile-visible' : ''}`}>
          <CategoryAccordion
            categoryTree={CATEGORY_STRUCTURE}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            onSelectCategory={handleSelectCategory}
            onSelectSubcategory={handleSelectSubcategory}
            onClearFilters={handleClearFilters}
            productCounts={productCounts}
          />
        </div>

        {/* Contenido Principal: Barra de estado y Grilla */}
        <main className="catalog-main">
          {/* Barra de estado de filtros activos */}
          <div className="catalog-status-bar">
            <div className="status-count-wrap">
              <span className="status-count">
                Mostrando <strong>{filteredProducts.length}</strong> de {products.length} productos
              </span>
            </div>

            {(selectedCategory || selectedSubcategory) ? (
              <div className="active-filter-chips">
                <span className="chip-label">Filtro aplicado:</span>
                <div className="active-chip">
                  <span className="chip-cat">{selectedCategory}</span>
                  {selectedSubcategory && (
                    <>
                      <span className="chip-separator">›</span>
                      <span className="chip-subcat">{selectedSubcategory}</span>
                    </>
                  )}
                  <button 
                    type="button" 
                    className="chip-remove-btn"
                    onClick={handleClearFilters}
                    title="Eliminar filtro"
                    aria-label="Eliminar filtro"
                  >
                    <FaTimes />
                  </button>
                </div>
                <button 
                  type="button" 
                  className="btn-clear-text"
                  onClick={handleClearFilters}
                >
                  Ver todos los productos
                </button>
              </div>
            ) : (
              <div className="all-badge-chip">
                <span className="all-chip-dot" />
                <span>Todos los productos</span>
              </div>
            )}
          </div>

          {/* Grilla de productos con animaciones fluidas */}
          <motion.div 
            key={`${selectedCategory || 'all'}-${selectedSubcategory || 'all'}`}
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id} 
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(5, 150, 105, 0.15)' }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Estado vacío cuando no hay resultados */}
          {filteredProducts.length === 0 && (
            <div className="no-products-card">
              <div className="no-products-icon-wrap">
                <FaSeedling className="no-products-icon" />
              </div>
              <h3 className="no-products-title">No se encontraron productos</h3>
              <p className="no-products-text">
                No hay productos disponibles en la selección actual.
              </p>
              <button 
                type="button" 
                className="btn btn-primary btn-reset-catalog"
                onClick={handleClearFilters}
              >
                <FaLayerGroup /> Ver todos los productos
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;
