import React, { useState } from 'react';
import { FaFilePdf, FaWhatsapp, FaStar, FaLeaf, FaAward, FaCheckCircle, FaDownload } from 'react-icons/fa';
import '../styles/Premium.css';

// ─── DATOS: LÍNEA CLÁSICA ────────────────────────────────────────────────────
const lineaClasica = [
  {
    id: 'clasica-biotacc-suelo',
    name: 'BIOTACC SUELO',
    subtitle: 'Fertilizante Orgánico Edáfico',
    image: '/images/products/granulado-2.webp',
    benefits: [
      'Aporta fósforo, calcio, silicio y materia orgánica.',
      'Permite una mejor estructura del suelo.',
      'Favorece el desarrollo radicular.',
      'Incrementa la producción en cantidad y calidad.',
    ],
    pdf: '/documents/FICHA TECNICA BIOTACC SUELO (1).pdf',
  },
  {
    id: 'clasica-biosilix',
    name: 'BIOSILIX',
    subtitle: 'Fertilizante Edáfico',
    image: '/images/products/BIOSILIX.webp',
    benefits: [
      'Mejora la estructura del suelo.',
      'Incrementa la resistencia de las plantas.',
      'Favorece el desarrollo radicular.',
      'Contribuye a cultivos más vigorosos y productivos.',
    ],
    pdf: '/documents/FICHA TECNICA BIOSILIX (1).pdf',
  },
  {
    id: 'clasica-nitrorganico',
    name: 'NITRORGÁNICO ESSENTIAL MICROMIX',
    subtitle: 'Fertilizante Orgánico Granulado',
    image: '/images/products/granulado-4.webp',
    benefits: [
      'Mejora la fertilidad del suelo.',
      'Favorece el desarrollo radicular.',
      'Incrementa la disponibilidad de nutrientes.',
      'Asegura una nutrición uniforme y eficiente.',
    ],
    pdf: '/documents/FICHA TECNICA NITRORGANICO.pdf',
  },
  {
    id: 'clasica-silmag',
    name: 'SILMAG - PK',
    subtitle: 'Fertilizante Granulado',
    image: '/images/products/granulado-1.webp',
    benefits: [
      'Estimula el crecimiento radicular.',
      'Incrementa el tamaño y peso de granos y frutos.',
      'Mejora la resistencia a plagas y enfermedades.',
      'Promueve una mejor utilización de N y P.',
    ],
    pdf: '/documents/FICHA TECNICA SILMAG PK (1).pdf',
  },
];

// ─── DATOS: LÍNEA PREMIUM ─────────────────────────────────────────────────────
const lineaPremiun = [
  {
    id: 'premiun-biotacc-suelo',
    name: 'BIOTACC SUELO',
    subtitle: 'Fertilizante Orgánico Edáfico Premium',
    image: '/images/products/granulado-2.webp',
    benefits: [
      'Aporta fósforo, calcio, silicio y materia orgánica.',
      'Permite una mejor estructura del suelo.',
      'Favorece el desarrollo radicular.',
      'Incrementa la producción en cantidad y calidad.',
    ],
    pdf: '/documents/FT BIOTACC SUELO.pdf',
  },
  {
    id: 'premiun-biosilix',
    name: 'BIOSILIX',
    subtitle: 'Fertilizante Edáfico Premium',
    image: '/images/products/BIOSILIX.webp',
    benefits: [
      'Mejora la estructura del suelo.',
      'Incrementa la resistencia de las plantas.',
      'Favorece el desarrollo radicular.',
      'Contribuye a cultivos más vigorosos y productivos.',
    ],
    pdf: '/documents/FT BIOSILIX.pdf',
  },
  {
    id: 'premiun-nitrorganico',
    name: 'NITRORGÁNICO',
    subtitle: 'Fertilizante Orgánico Premium',
    image: '/images/products/granulado-4.webp',
    benefits: [
      'Mejora la fertilidad del suelo.',
      'Favorece el desarrollo radicular.',
      'Incrementa la disponibilidad de nutrientes.',
      'Asegura una nutrición uniforme y eficiente.',
    ],
    pdf: '/documents/FT NITRORGÁNICO.pdf',
  },
  {
    id: 'premiun-silmag',
    name: 'SILMAG PK',
    subtitle: 'Fertilizante Granulado Premium',
    image: '/images/products/granulado-1.webp',
    benefits: [
      'Estimula el crecimiento radicular.',
      'Incrementa el tamaño y peso de granos y frutos.',
      'Mejora la resistencia a plagas y enfermedades.',
      'Promueve una mejor utilización de N y P.',
    ],
    pdf: '/documents/FT SILMAG PK.pdf',
  },
];

// ─── COMPONENTE TARJETA ───────────────────────────────────────────────────────
const PremiumCard = ({ product, isPremiun }) => {
  const message = `Hola, estoy interesado en el producto ${product.name} de la línea ${isPremiun ? 'Premium' : 'Clásica'}.`;
  const whatsappLink = `https://wa.me/51934408500?text=${encodeURIComponent(message)}`;

  return (
    <div className={`premium-card ${isPremiun ? 'premium-card--gold' : 'premium-card--classic'}`}>
      {isPremiun && (
        <div className="premium-badge">
          <FaAward /> PREMIUM
        </div>
      )}
      <div className="premium-card__image-wrap">
        <img src={product.image} alt={product.name} className="premium-card__image" />
      </div>
      <div className="premium-card__body">
        <p className="premium-card__subtitle">{product.subtitle}</p>
        <h3 className="premium-card__name">{product.name}</h3>
        <ul className="premium-card__benefits">
          {product.benefits.map((b, i) => (
            <li key={i}>
              <FaCheckCircle className="benefit-check" /> {b}
            </li>
          ))}
        </ul>
        <div className="premium-card__actions">
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className={`prem-btn prem-btn--pdf ${isPremiun ? 'prem-btn--gold' : ''}`}
          >
            <FaDownload /> Ficha Técnica
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="prem-btn prem-btn--wa"
          >
            <FaWhatsapp /> Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
const Premium = () => {
  const [activeTab, setActiveTab] = useState('premiun');

  const currentProducts = activeTab === 'clasica' ? lineaClasica : lineaPremiun;
  const isPremiun = activeTab === 'premiun';

  return (
    <div className="premium-page">
      {/* Hero Banner */}
      <div className="premium-hero">
        <div className="premium-hero__glow" />
        <div className="premium-hero__content">
          <FaStar className="premium-hero__star" />
          <h1 className="premium-hero__title">Línea <span>Premium</span></h1>
          <p className="premium-hero__subtitle">
            Fertilizantes de alta concentración y formulación avanzada para resultados excepcionales en sus cultivos.
          </p>
        </div>
      </div>

      <div className="premium-page__inner container">
        {/* Tabs */}
        <div className="premium-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'premiun'}
            className={`premium-tab premium-tab--gold ${activeTab === 'premiun' ? 'premium-tab--active-gold' : ''}`}
            onClick={() => setActiveTab('premiun')}
          >
            <FaAward /> Línea Premium
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'clasica'}
            className={`premium-tab ${activeTab === 'clasica' ? 'premium-tab--active-classic' : ''}`}
            onClick={() => setActiveTab('clasica')}
          >
            <FaLeaf /> Línea Clásica
          </button>
        </div>

        {/* Tab description */}
        <div className={`premium-tab-desc ${isPremiun ? 'premium-tab-desc--gold' : ''}`}>
          {activeTab === 'clasica' ? (
            <p>
              <strong>Línea Clásica</strong> — Fertilizantes orgánicos de confianza, formulados con los mejores ingredientes para mejorar la fertilidad del suelo y el rendimiento de sus cultivos.
            </p>
          ) : (
            <p>
              <FaAward style={{ color: '#c9a227', marginRight: 6 }} />
              <strong>Línea Premium</strong> — Tecnología de vanguardia con formulaciones de alta concentración, mayor biodisponibilidad y resultados superiores comprobados en campo.
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className="premium-grid">
          {currentProducts.map((product) => (
            <PremiumCard key={product.id} product={product} isPremiun={isPremiun} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;
