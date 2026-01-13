import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, category, image, pdf } = product;
  
  // WhatsApp Message
  const message = `Hola, estoy interesado en el producto: ${name} (Categoría: ${category}).`;
  const whatsappLink = `https://wa.me/51934408500?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <span className="product-category">{category}</span>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        
        <div className="product-actions">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaWhatsapp /> Consultar
          </a>
          {/* <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
             <FaFilePdf /> Ficha
          </a> */}
           <Link to={`/productos/${id}`} className="btn btn-outline">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
