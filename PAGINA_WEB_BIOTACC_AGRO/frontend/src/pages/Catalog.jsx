import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { FaBox, FaTags } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import '../styles/Catalog.css';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Scroll trigger logic
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
  const [filter, setFilter] = useState('Todos');

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['Todos', 'Granulados', 'Foliares'];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="catalog-page section container">
      <h1 className="page-title">
        <FaBox className="title-icon" /> <Typewriter text="Nuestros Productos" delay={80} />
      </h1>
      
      {/* Filters */}
      <div className="filters-container">
        <label htmlFor="category-filter" className="filter-label"><FaTags className="filter-icon" /> Categoría:</label>
        <select 
          id="category-filter"
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <motion.div 
        key={filter}
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map(product => (
          <motion.div 
            key={product.id} 
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProducts.length === 0 && (
        <p className="no-products">No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default Catalog;
