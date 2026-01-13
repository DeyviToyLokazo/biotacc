import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaWhatsapp, FaArrowLeft, FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import '../styles/ProductDetail.css';

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

  return (
    <div className="product-detail-page section container">
      <Link to="/productos" className="back-link">
        <FaArrowLeft /> Volver al catálogo
      </Link>

      <div className="detail-grid">
        <div className="detail-image-container">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>

          
          <div className="detail-description">
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>

          <div className="detail-benefits">
            <h3>Beneficios Clave</h3>
            <ul>
              <li><FaCheckCircle className="check-icon"/> Mejora la estructura del suelo.</li>
              <li><FaCheckCircle className="check-icon"/> Incrementa la absorción de nutrientes.</li>
              <li><FaCheckCircle className="check-icon"/> Producto 100% Orgánico y Sostenible.</li>
            </ul>
          </div>

          <div className="detail-actions">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <FaWhatsapp /> Consultar
            </a>
            {/* Placeholder for PDF */}
            <button className="btn btn-outline btn-lg" onClick={() => alert('Descarga de ficha técnica pronto')}>
              <FaFileDownload /> Ficha Técnica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
