import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroCarousel from '../components/HeroCarousel';

import { motion, useInView } from 'framer-motion';
import { 
  FaMicroscope, 
  FaSeedling, 
  FaChartLine, 
  FaUserGraduate, 
  FaAward, 
  FaLightbulb 
} from 'react-icons/fa';

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
  { 
    id: 1, 
    number: '01',
    badge: 'I+D Agronómico',
    title: 'Enfoque Científico', 
    text: 'Desarrollamos soluciones basadas en investigación para potenciar la biología del suelo.',
    icon: FaMicroscope
  },
  { 
    id: 2, 
    number: '02',
    badge: 'Bio-Sustentable',
    title: 'Sostenibilidad', 
    text: 'Productos amigables con el medio ambiente que promueven una agricultura regenerativa.',
    icon: FaSeedling
  },
  { 
    id: 3, 
    number: '03',
    badge: 'Alto Rendimiento',
    title: 'Resultados', 
    text: 'Incremento comprobado en la productividad y calidad de los cultivos.',
    icon: FaChartLine
  },
  { 
    id: 4, 
    number: '04',
    badge: 'Soporte en Campo',
    title: 'Asesoría Técnica', 
    text: 'Te acompañamos en todo el proceso. Nuestro equipo de ingenieros agrónomos está a tu disposición.',
    icon: FaUserGraduate
  },
  { 
    id: 5, 
    number: '05',
    badge: 'Pureza Certificada',
    title: 'Calidad Premium', 
    text: 'Insumos de alta pureza y concentración, diseñados para maximizar el rendimiento de tu cosecha.',
    icon: FaAward
  },
  { 
    id: 6, 
    number: '06',
    badge: 'Biotecnología Activa',
    title: 'Innovación Constante', 
    text: 'Investigamos continuamente para desarrollar nuevas nutriciones que se adapten al cambio climático.',
    icon: FaLightbulb
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 18 }
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
             Excelencia, tecnología y compromiso en cada producto.
           </motion.p>
        </div>
        
        <motion.div 
          className="highlights-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
           {highlights.map((item) => (
             <motion.div 
               key={item.id} 
               className="highlight-card-col"
               variants={cardVariants}
             >
                <div className="highlight-card">
                  {/* Glowing decorative accents */}
                  <div className="card-top-accent"></div>
                  <div className="card-corner-glow"></div>

                  {/* Header: Icon & Luxury Number Watermark */}
                  <div className="card-header-top">
                    <div className="card-icon-wrapper">
                      <item.icon className="card-icon" />
                    </div>
                    <span className="card-number-watermark" aria-hidden="true">{item.number}</span>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <div className="card-badge-wrapper">
                      <span className="card-badge">{item.badge}</span>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.text}</p>
                  </div>

                  {/* Bottom accent indicator bar */}
                  <div className="card-bottom-accent">
                    <span className="accent-bar"></span>
                  </div>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
