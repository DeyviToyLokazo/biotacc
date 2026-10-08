import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaAward } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, category, subcategory, image } = product;
  const isFertilizante = category === 'Fertilizantes';
  
  // WhatsApp Message
  const message = `Hola, estoy interesado en el producto: ${name} (Categoría: ${category}${subcategory ? ` - ${subcategory}` : ''}).`;
  const whatsappLink = `https://wa.me/51934408500?text=${encodeURIComponent(message)}`;

  return (
    <div className={`product-card ${isFertilizante ? 'product-card--gold' : ''}`}>
      <div className="product-image-container">
        {isFertilizante && (
          <div className="product-premium-badge">
            <FaAward className="premium-badge-icon" /> PREMIUM
          </div>
        )}
        <img src={image} alt={name} className="product-image" />
        <span className={`product-category ${isFertilizante ? 'product-category--gold' : ''}`}>
          {subcategory || category}
        </span>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        
        <div className="product-actions">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-consultar"
          >
            <FaWhatsapp /> Consultar
          </a>
          <Link 
            to={`/productos/${id}`} 
            className="btn btn-outline btn-detail"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
