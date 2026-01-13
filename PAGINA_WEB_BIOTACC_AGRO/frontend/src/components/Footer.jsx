import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLeaf } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Logo Section (Left) */}
        <div className="footer-section logo-column">
           <img src="/images/logo-main.png" alt="BIOTACC Logo" className="footer-logo-img" />
        </div>

        {/* Brand Section (Center) */}
        <div className="footer-section brand">
          <div className="footer-title">
             BIOTACC AGRO
          </div>
          <p className="footer-description">
            Líderes en biotecnología agrícola. Insumos orgánicos certificados para una agricultura sostenible y rentable.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1Chc7MQr6N/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook className="icon-facebook" />
              <span>Biotacc AGRO SAC</span>
            </a>
            <a href="https://www.instagram.com/biotaccagro/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="icon-instagram" />
              <span>BIOTACC AGRO SAC</span>
            </a>
          </div>
        </div>

        {/* Contact Section (Right) */}
        <div className="footer-section contact">
          <h3>Contacto</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon-small" /> 
              <span>Simbila, Catacaos – Piura</span>
            </li>
            <li>
              <FaMapMarkerAlt className="icon-small" /> 
              <span>Ferreñafe – Lambayeque</span>
            </li>
            <li>
              <FaPhone className="icon-small" /> 
              <span>+51 934 408 500</span>
            </li>
            <li>
              <FaEnvelope className="icon-small" /> 
              <span>biotaccagrosac1@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Peru Flag Section (Far Right) */}
        <div className="footer-section peru-column">
           <img src="/images/flag-peru.jpg" alt="Bandera del Perú" className="footer-flag-img" />
           <span className="peru-text">Orgullosamente Peruanos</span>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BIOTACC AGRO S.A.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
