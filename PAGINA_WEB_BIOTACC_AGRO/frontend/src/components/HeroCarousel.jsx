import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/HeroCarousel.css';

// Import local images
import slider1 from '../assets/images/slider-1.jpg';
import slider2 from '../assets/images/slider-2.jpg';
import slider3 from '../assets/images/slider-3.jpg';

const slides = [
  {
    id: 1,
    image: slider1,
    title: 'Mejoramos la salud del suelo y el desarrollo de tus cultivos',
    subtitle: 'Insumos orgánicos, técnicos y científicos para una agricultura sostenible.'
  },
  {
    id: 2,
    image: slider2,
    title: 'Bio-Innovación para el Agro',
    subtitle: 'Soluciones efectivas para maximizar tu rendimiento y calidad.'
  },
  {
    id: 3,
    image: slider3,
    title: 'Comprometidos con el Medio Ambiente',
    subtitle: 'Productos certificados que garantizan un futuro más verde.'
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="hero-carousel">
      <AnimatePresence>
        <motion.div 
          key={current}
          className="slide-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image (Original Color) */}
          <div 
            className="slide-bg" 
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Content */}
          <div className="container slide-content">
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="slide-supertitle"
            >
              BIOTACC AGRO S.A.C
            </motion.h3>

            <motion.img 
              src="/images/logo-main.png" 
              alt="Logo BIOTACC" 
              className="slide-logo"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="slide-title"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="slide-subtitle"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="slide-buttons"
            >
               <Link to="/productos" className="btn btn-primary margin-right">Ver Productos</Link>
               <Link to="/contacto" className="btn btn-outline-light">Contáctanos</Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="carousel-nav prev" onClick={prevSlide}><FaChevronLeft /></button>
      <button className="carousel-nav next" onClick={nextSlide}><FaChevronRight /></button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
