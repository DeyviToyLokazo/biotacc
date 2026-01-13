import React, { useState, useEffect, useRef } from 'react';
import { FaAward, FaSeedling, FaIndustry, FaFilePdf, FaBullseye, FaLightbulb } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Scroll trigger logic
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% visible

  useEffect(() => {
    // Only start typing if in view
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

const About = () => {
  // Animation variants for paragraphs
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };

  // Variants for sequential card animation
  const plantsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Wait for duration of previous card (0.8s)
        delayChildren: 0.3
      }
    }
  };

  const plantCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="about-page">
      <section className="section intro-section">
        <div className="container">
          <h1 className="page-title"><Typewriter text="Nosotros" delay={100} /></h1>
          
          <div className="about-content">
            <div className="about-text">
              <h2><Typewriter text="¿Quiénes Somos?" delay={100} /></h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                BIOTACC es una empresa especializada en la elaboración y comercialización de insumos orgánicos, 
                orientada a mejorar la salud del suelo y el desarrollo natural de los cultivos.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                Fundada y liderada por el ingeniero agrónomo <strong>César Palacios Agurto</strong>, 
                la empresa desarrolla sus productos bajo un enfoque técnico y científico, 
                promoviendo una agricultura sostenible y responsable con el medio ambiente.
              </motion.p>
            </div>
            <div className="about-image">
               <img src="/images/founder.png" alt="Fundador BIOTACC AGRO" className="founder-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <FaBullseye className="mission-icon" />
              <h2><Typewriter text="Nuestra Misión" delay={100} /></h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                Desarrollar, producir y comercializar insumos orgánicos orientados a mejorar la salud del suelo 
                y el adecuado desarrollo de los cultivos. Operamos bajo un enfoque técnico y científico, 
                brindando soluciones confiables y acompañamiento técnico al productor agrícola.
              </motion.p>
            </div>
            <div className="mission-card">
              <FaLightbulb className="mission-icon" />
              <h2><Typewriter text="Nuestra Visión" delay={100} /></h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                Ser reconocidos a nivel nacional e internacional como líderes en soluciones orgánicas y sostenibles 
                para la agricultura, transformando prácticas agrícolas mediante innovación técnica y científica, 
                elevando la productividad de los suelos y cultivos, y contribuyendo a un agro más rentable, 
                resiliente y ecológico para las futuras generaciones.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="plants-title"><Typewriter text="Nuestras Sedes" delay={100} /></h2>
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Contamos con dos plantas de producción donde elaboramos nuestros insumos y brindamos atención técnica.
        </motion.p>
        
        <motion.div 
          className="plants-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={plantsContainer}
        >
          <motion.div className="plant-card" variants={plantCard}>
            <img src="/images/plant-piura.jpg" alt="Planta Piura" className="plant-img" />
            <h3>Planta Piura</h3>
            <p>Fundo Mundaca S/N, C.P. Simbila, Catacaos.</p>
          </motion.div>
          <motion.div className="plant-card" variants={plantCard}>
            <img src="/images/plant-lambayeque.png" alt="Planta Lambayeque" className="plant-img" />
            <h3>Planta Lambayeque</h3>
            <p>Mz. E Lt. 08, C.P. Fala II Etapa, Ferreñafe.</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="section container">
        <h2 className="plants-title"><Typewriter text="Certificaciones" delay={100} /></h2>
        <motion.p 
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Nuestros productos cuentan con certificaciones que garantizan su calidad y cumplimiento normativo.
        </motion.p>
        
        <motion.div 
          className="certifications-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={plantsContainer}
        >
          <motion.div className="certification-card" variants={plantCard}>
            <img src="/images/certificacion-1.jpg" alt="Certificación 1" className="cert-img" />
            <FaAward className="cert-icon" />
            <h3>Certificación Orgánica</h3>
            <p>
              Certificación otorgada por <strong>Kiwa - Costa Rica</strong>, 
              conforme a los requisitos técnicos y normativos aplicables para productos orgánicos.
            </p>
            <a href="/documents/certificacion-1.pdf" target="_blank" rel="noopener noreferrer" className="cert-download-btn">
              <FaFilePdf className="pdf-icon" /> Descargar PDF
            </a>
          </motion.div>
          
          <motion.div className="certification-card" variants={plantCard}>
            <img src="/images/certificacion-2.jpg" alt="Certificación 2" className="cert-img" />
            <FaAward className="cert-icon" />
            <h3>Certificación de Calidad</h3>
            <p>
              Certificación de calidad otorgada por <strong>Kiwa - Costa Rica</strong>, 
              validando nuestros procesos de producción y control de calidad.
            </p>
            <a href="/documents/certificacion-2.pdf" target="_blank" rel="noopener noreferrer" className="cert-download-btn">
              <FaFilePdf className="pdf-icon" /> Descargar PDF
            </a>
          </motion.div>
          
          <motion.div className="certification-card" variants={plantCard}>
            <img src="/images/certificacion-3.jpg" alt="Certificación 3" className="cert-img" />
            <FaAward className="cert-icon" />
            <h3>Certificación Ambiental</h3>
            <p>
              Certificación que valida nuestro compromiso con prácticas sostenibles y 
              responsables con el medio ambiente.
            </p>
            <a href="/documents/certificacion-3.pdf" target="_blank" rel="noopener noreferrer" className="cert-download-btn">
              <FaFilePdf className="pdf-icon" /> Descargar PDF
            </a>
          </motion.div>
        </motion.div>
        
      </section>

      <section className="section container location-section">
        <h2 className="plants-title"><Typewriter text="Ubicación Central" delay={100} /></h2>
        <motion.p 
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Visítanos en nuestra sede principal ubicada en Catacaos, Piura.
        </motion.p>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15887.828552187313!2d-80.6865261!3d-5.2635336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a11f2a33f443b%3A0x64f1345f653490!2sSimbila%2C%20Catacaos!5e0!3m2!1ses-419!2spe!4v1704987254321!5m2!1ses-419!2spe" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - BIOTACC AGRO"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
