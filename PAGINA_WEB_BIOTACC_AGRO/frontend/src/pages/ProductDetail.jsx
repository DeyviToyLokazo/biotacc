import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaWhatsapp, FaArrowLeft, FaCheckCircle, FaFileDownload, FaAward, FaFlask, FaSeedling, FaMedal, FaLeaf, FaChevronRight } from 'react-icons/fa';
import '../styles/ProductDetail.css';
import '../styles/ProductDetailPremium.css';
import '../styles/ProductDetailStandard.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-primary">Volver al Catálogo</Link>
      </div>
    );
  }

  const message = `Hola, quisiera más información sobre: ${product.name}`;
  const whatsappLink = `https://wa.me/51934408500?text=${encodeURIComponent(message)}`;

  // Los fertilizantes se muestran como línea Premium (igual que en ProductCard)
  const isPremium = product.category === 'Fertilizantes';

  if (isPremium) {
    return (
      <div className="pd-premium">
        <div className="pd-premium__glow pd-premium__glow--1" />
        <div className="pd-premium__glow pd-premium__glow--2" />

        <div className="container pd-premium__inner">
          <Link to="/productos" className="pd-premium__back" id="pd-premium-back">
            <FaArrowLeft /> Volver al catálogo
          </Link>

          <div className="pd-premium__grid">
            <div className="pd-premium__media">
              <div className="pd-premium__frame">
                <span className="pd-premium__ribbon">
                  <FaAward /> PREMIUM
                </span>
                <img src={product.image} alt={product.name} className="pd-premium__image" />
              </div>
            </div>

            <div className="pd-premium__info">
              <span className="pd-premium__eyebrow">
                <FaAward /> Línea Premium
                <span className="pd-premium__eyebrow-sep">•</span>
                {product.subcategory || product.category}
              </span>

              <h1 className="pd-premium__name">{product.name}</h1>
              <div className="pd-premium__divider" />

              <div className="pd-premium__block">
                <h3>Descripción</h3>
                <p>{product.description}</p>
              </div>

              <div className="pd-premium__block">
                <h3>Beneficios Clave</h3>
                <ul className="pd-premium__benefits">
                  {product.benefits && product.benefits.map((benefit, index) => (
                    <li key={index}>
                      <FaCheckCircle className="pd-premium__check" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="pd-premium__highlights">
                <li><FaFlask /> Alta concentración</li>
                <li><FaSeedling /> Mayor biodisponibilidad</li>
                <li><FaMedal /> Resultados comprobados</li>
              </ul>

              <div className="pd-premium__actions">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pd-premium__btn pd-premium__btn--gold" id="pd-premium-consultar">
                  <FaWhatsapp /> Consultar
                </a>
                {product.pdf ? (
                  <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="pd-premium__btn pd-premium__btn--outline" id="pd-premium-ficha">
                    <FaFileDownload /> Ficha Técnica
                  </a>
                ) : (
                  <button className="pd-premium__btn pd-premium__btn--outline" onClick={() => alert('Ficha técnica no disponible por el momento')}>
                    <FaFileDownload /> Ficha Técnica
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Diseño estándar (Foliares / productos normales) ───
  return (
    <div className="pd-std">
      <section className="pd-std__hero">
        <FaLeaf className="pd-std__hero-leaf pd-std__hero-leaf--1" aria-hidden="true" />
        <FaLeaf className="pd-std__hero-leaf pd-std__hero-leaf--2" aria-hidden="true" />
        <div className="container pd-std__hero-inner">
          <Link to="/productos" className="pd-std__back" id="pd-std-back">
            <FaArrowLeft /> Volver al catálogo
          </Link>
          <nav className="pd-std__crumbs" aria-label="Ruta">
            <Link to="/productos">Productos</Link>
            <FaChevronRight />
            <span>{product.category}</span>
            {product.subcategory && (
              <>
                <FaChevronRight />
                <span>{product.subcategory}</span>
              </>
            )}
          </nav>
          <h1 className="pd-std__name">{product.name}</h1>
          <p className="pd-std__lead">{product.description}</p>
        </div>
      </section>

      <div className="container">
        <div className="pd-std__card">
          <div className="pd-std__media">
            <div className="pd-std__media-bg" />
            <img src={product.image} alt={product.name} className="pd-std__image" />
            <span className="pd-std__media-tag">
              <FaLeaf /> {product.subcategory || product.category}
            </span>
          </div>

          <div className="pd-std__info">
            <h2 className="pd-std__title">Beneficios Clave</h2>
            <ul className="pd-std__benefits">
              {product.benefits && product.benefits.map((benefit, index) => (
                <li key={index} className="pd-std__benefit">
                  <span className="pd-std__benefit-num">{String(index + 1).padStart(2, '0')}</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <dl className="pd-std__meta">
              <div>
                <dt>Categoría</dt>
                <dd>{product.category}</dd>
              </div>
              {product.subcategory && (
                <div>
                  <dt>Línea</dt>
                  <dd>{product.subcategory}</dd>
                </div>
              )}
              <div>
                <dt>Ficha técnica</dt>
                <dd>{product.pdf ? 'Disponible' : 'Próximamente'}</dd>
              </div>
            </dl>

            <div className="pd-std__actions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pd-std__btn pd-std__btn--solid" id="pd-std-consultar">
                <FaWhatsapp /> Consultar
              </a>
              {product.pdf ? (
                <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="pd-std__btn pd-std__btn--outline" id="pd-std-ficha">
                  <FaFileDownload /> Ficha Técnica
                </a>
              ) : (
                <button className="pd-std__btn pd-std__btn--outline" onClick={() => alert('Ficha técnica no disponible por el momento')}>
                  <FaFileDownload /> Ficha Técnica
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
