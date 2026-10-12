import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSeedling,
  FaCalculator,
  FaFileAlt,
  FaChartBar,
  FaHandshake,
  FaLeaf,
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';
import { GiSugarCane, GiBananaBunch, GiPotato, GiChiliPepper } from 'react-icons/gi';
import '../styles/Services.css';

const IMG = '/images/servicios';
const DOCS = '/documents/servicios';

const features = [
  { id: 'analisis', icon: FaSeedling, label: 'Análisis de requerimientos nutricionales' },
  { id: 'calculo', icon: FaCalculator, label: 'Cálculo de aportes de nuestros fertilizantes' },
  { id: 'formulacion', icon: FaFileAlt, label: 'Formulación de propuestas técnicas' },
  { id: 'orientacion', icon: FaChartBar, label: 'Orientación para una mejor planificación' },
];

const proposals = [
  {
    id: 'cana',
    icon: GiSugarCane,
    title: 'Cultivo de caña de azúcar',
    text: 'Propuesta de fertilización basada en los requerimientos nutricionales del cultivo y los aportes de nuestros fertilizantes.',
    image: `${IMG}/cultivo-cana.jpg`,
    preview: `${IMG}/preview-cana.png`,
    pdf: `${DOCS}/PF CULTIVO  CAÑA DE AZUCAR.pdf`,
  },
  {
    id: 'banano',
    icon: GiBananaBunch,
    title: 'Cultivo de banano orgánico',
    text: 'Propuesta de fertilización orientada al manejo nutricional del banano orgánico, considerando sus requerimientos y los aportes de nuestros fertilizantes.',
    image: `${IMG}/cultivo-banano.jpg`,
    preview: `${IMG}/preview-banano.png`,
    pdf: `${DOCS}/PF CULTIVO DE  BANANO ORGANICO.pdf`,
  },
  {
    id: 'papa',
    icon: GiPotato,
    title: 'Cultivo de papa',
    text: 'Propuesta de fertilización que contempla el cálculo de los requerimientos nutricionales y la combinación de fertilizantes BIOTACC AGRO.',
    image: `${IMG}/cultivo-papa.jpg`,
    preview: `${IMG}/preview-papa.png`,
    pdf: `${DOCS}/PF CULTIVO DE PAPA.pdf`,
  },
  {
    id: 'rocoto',
    icon: GiChiliPepper,
    title: 'Cultivo de rocoto',
    text: 'Propuesta de fertilización elaborada a partir de los requerimientos nutricionales del cultivo y la evaluación de los aportes de nuestros fertilizantes.',
    image: `${IMG}/cultivo-rocoto.jpg`,
    preview: `${IMG}/preview-rocoto.png`,
    pdf: `${DOCS}/PF CULTIVO DE ROCOTO.pdf`,
  },
];

const ctaFeatures = [
  { id: 'personalizadas', icon: FaSeedling, label: 'Propuestas personalizadas' },
  { id: 'acompanamiento', icon: FaHandshake, label: 'Acompañamiento técnico' },
  { id: 'produccion', icon: FaChartBar, label: 'Orientación para mejorar la producción' },
];

const WHATSAPP_LINK = `https://wa.me/51934408500?text=${encodeURIComponent(
  'Hola BIOTACC AGRO, quisiera solicitar una propuesta de fertilización para mi cultivo.'
)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const Services = () => {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="srv-hero" style={{ backgroundImage: `url(${IMG}/servicios-hero.jpg)` }}>
        <div className="srv-hero-overlay" />
        <div className="srv-container srv-hero-content">
          <motion.h1
            className="srv-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Servicios
          </motion.h1>
          <motion.p
            className="srv-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Soluciones técnicas para una agricultura sostenible
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="srv-intro">
        <div className="srv-container srv-intro-grid">
          <motion.div
            className="srv-intro-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="srv-eyebrow">Nuestros servicios</span>
            <h2 className="srv-intro-title">Propuestas de fertilización agrícola</h2>
            <p className="srv-intro-desc">
              En <strong>BIOTACC AGRO S.A.C.</strong> desarrollamos propuestas de fertilización adaptadas a los
              requerimientos nutricionales de cada cultivo, utilizando nuestra línea de fertilizantes para plantear
              alternativas de manejo nutricional orientadas a los objetivos de producción.
            </p>
          </motion.div>

          <motion.ul
            className="srv-features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            {features.map((f) => (
              <motion.li key={f.id} className="srv-feature" variants={fadeUp}>
                <span className="srv-feature-icon">
                  <f.icon />
                </span>
                <span className="srv-feature-label">{f.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* PROPUESTAS */}
      <section className="srv-proposals">
        <div className="srv-container">
          <motion.div
            className="srv-proposals-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="srv-eyebrow srv-eyebrow--center">Ejemplos de nuestro trabajo</span>
            <h2 className="srv-section-title">Propuestas de fertilización con nuestros fertilizantes</h2>
            <p className="srv-section-desc">
              A continuación, presentamos algunos ejemplos de propuestas elaboradas con los productos de BIOTACC AGRO
              para diferentes cultivos. Estos ejemplos muestran cómo desarrollamos nuestras propuestas técnicas.
            </p>
          </motion.div>

          <motion.div
            className="srv-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {proposals.map((p) => (
              <motion.article key={p.id} className="srv-card" variants={fadeUp}>
                <div className="srv-card-media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="srv-card-body">
                  <div className="srv-card-head">
                    <span className="srv-card-icon">
                      <p.icon />
                    </span>
                    <h3 className="srv-card-title">{p.title}</h3>
                  </div>
                  <p className="srv-card-text">{p.text}</p>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="srv-card-preview"
                    aria-label={`Vista previa de la propuesta ${p.title}`}
                  >
                    <img src={p.preview} alt={`Propuesta de fertilización - ${p.title}`} loading="lazy" />
                    <div className="srv-card-preview-thumb">
                      <img src={p.image} alt="" aria-hidden="true" loading="lazy" />
                    </div>
                  </a>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="srv-card-btn"
                    id={`srv-ver-ejemplo-${p.id}`}
                  >
                    Ver ejemplo <FaArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* NOTA */}
          <motion.div
            className="srv-note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="srv-note-icon">
              <FaLeaf />
            </span>
            <p className="srv-note-text">
              Las propuestas presentadas son ejemplos de nuestro trabajo técnico y tienen carácter referencial.
              <br />
              Deben ajustarse a las condiciones del suelo, los requerimientos del cultivo y los objetivos de producción.
              <br />
              Para establecer un programa de fertilización específico, se recomienda realizar un diagnóstico nutricional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="srv-cta-wrap">
        <div className="srv-container">
          <motion.div
            className="srv-cta"
            style={{ backgroundImage: `url(${IMG}/servicios-cta.jpg)` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="srv-cta-overlay" />
            <div className="srv-cta-content">
              <div className="srv-cta-text">
                <h2 className="srv-cta-title">
                  ¿Necesitas una propuesta
                  <br />
                  de fertilización para tu cultivo?
                </h2>
                <p className="srv-cta-desc">Contáctanos y conoce nuestras soluciones nutricionales.</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="srv-cta-btn"
                  id="srv-cta-contactanos"
                >
                  <FaWhatsapp className="srv-cta-btn-wa" /> Contáctanos ahora <FaArrowRight />
                </a>
              </div>
              <ul className="srv-cta-features">
                {ctaFeatures.map((f) => (
                  <li key={f.id} className="srv-cta-feature">
                    <span className="srv-cta-feature-icon">
                      <f.icon />
                    </span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
