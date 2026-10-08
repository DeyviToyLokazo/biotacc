import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserTie,
  FaFlask,
  FaClipboardList,
  FaTractor,
  FaChalkboardTeacher,
  FaWhatsapp,
} from 'react-icons/fa';
import '../styles/Services.css';

// NOTA: Contenido base de servicios. Ajustar títulos/descripciones según la oferta real de la empresa.
const services = [
  {
    id: 'asesoria-tecnica',
    icon: FaUserTie,
    title: 'Asesoría Técnica Agronómica',
    text: 'Nuestro equipo de ingenieros agrónomos te orienta en el manejo nutricional y sanitario de tus cultivos.',
  },
  {
    id: 'analisis-suelo',
    icon: FaFlask,
    title: 'Diagnóstico de Suelo',
    text: 'Evaluamos las condiciones de tu suelo para identificar deficiencias y definir la estrategia de fertilización adecuada.',
  },
  {
    id: 'planes-fertilizacion',
    icon: FaClipboardList,
    title: 'Planes de Fertilización',
    text: 'Diseñamos programas de nutrición personalizados según tu cultivo, etapa fenológica y objetivos de producción.',
  },
  {
    id: 'acompanamiento-campo',
    icon: FaTractor,
    title: 'Acompañamiento en Campo',
    text: 'Realizamos visitas y seguimiento continuo para asegurar la correcta aplicación y medir resultados.',
  },
  {
    id: 'capacitaciones',
    icon: FaChalkboardTeacher,
    title: 'Capacitaciones',
    text: 'Charlas y talleres para productores sobre agricultura sostenible, salud del suelo y uso eficiente de insumos.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
};

const buildWhatsappLink = (serviceTitle) => {
  const message = `Hola BIOTACC AGRO, estoy interesado en el servicio de ${serviceTitle}.`;
  return `https://wa.me/51934408500?text=${encodeURIComponent(message)}`;
};

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <motion.h1
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Más que insumos: te acompañamos con soluciones técnicas para mejorar la productividad de tus cultivos.
          </motion.p>
        </div>
      </section>

      <section className="section container services-section">
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.article key={service.id} className="service-card" variants={cardVariants}>
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-text">{service.text}</p>
              <a
                href={buildWhatsappLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta"
                id={`service-cta-${service.id}`}
              >
                <FaWhatsapp /> Solicitar información
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
