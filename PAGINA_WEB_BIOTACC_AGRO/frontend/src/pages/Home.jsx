import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroCarousel from '../components/HeroCarousel';

import { motion, useInView } from 'framer-motion';

// Import images for cards (Spanish names)
import imgCientifico from '../assets/images/enfoque-cientifico.jpg';
import imgSostenibilidad from '../assets/images/sostenibilidad-campo.jpg';
import imgResultados from '../assets/images/certificacion-organica.jpg';
import imgAsesoria from '../assets/images/asesoria-tecnica.jpg';
import imgCalidad from '../assets/images/calidad-producto.jpg';
import imgInnovacion from '../assets/images/innovacion-agro.jpg';

const Typewriter = ({ text, delay = 100, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !isStarted) {
      const timer = setTimeout(() => {
        setIsStarted(true);
        setShowCursor(true);
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [isInView, startDelay, isStarted]);

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setShowCursor(false);
    }
  }, [currentIndex, delay, text, isStarted]);

  return (
    <span ref={ref}>
      {currentText}
      <span className={`cursor ${showCursor ? 'blink' : 'hidden'}`}>|</span>
    </span>
  );
};

const highlights = [
  { id: 1, title: 'Enfoque Científico', text: 'Desarrollamos soluciones basadas en investigación para potenciar la biología del suelo.', img: imgCientifico },
  { id: 2, title: 'Sostenibilidad', text: 'Productos amigables con el medio ambiente que promueven una agricultura regenerativa.', img: imgSostenibilidad },
  { id: 3, title: 'Resultados', text: 'Incremento comprobado en la productividad y calidad de los cultivos.', img: imgResultados },
  { id: 4, title: 'Asesoría Técnica', text: 'Te acompañamos en todo el proceso. Nuestro equipo de ingenieros agrónomos está a tu disposición.', img: imgAsesoria },
  { id: 5, title: 'Calidad Premium', text: 'Insumos de alta pureza y concentración, diseñados para maximizar el rendimiento de tu cosecha.', img: imgCalidad },
  { id: 6, title: 'Innovación Constante', text: 'Investigamos continuamente para desarrollar nuevas nutriciones que se adapten al cambio climático.', img: imgInnovacion },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Retraso de 200ms entre cada hijo
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Empieza invisible y 30px abajo
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 2.5 } // Delay to wait for titles
  }
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Highlights */}
      {/* Highlights / Why Choose Us */}
      <section className="section highlights-section container">
        <div className="section-header text-center">
           <h2>
             <span className="title-normal"><Typewriter text="¿Por qué elegir " delay={100} /></span>
             <span className="title-highlight"><Typewriter text="BIOTACC?" delay={100} startDelay={1700} /></span>
           </h2>
           <motion.p 
             className="section-subtitle"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={fadeInUp}
           >
             Excellencia, tecnología y compromiso en cada producto.
           </motion.p>
        </div>
        
        <motion.div 
          className="highlights-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
           {highlights.map((item) => (
             <motion.div 
               key={item.id} 
               className="highlight-card"
               variants={cardVariants}
             >
                <div className="card-img-wrapper">
                  <img src={item.img} alt={item.title} className="card-img" />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
