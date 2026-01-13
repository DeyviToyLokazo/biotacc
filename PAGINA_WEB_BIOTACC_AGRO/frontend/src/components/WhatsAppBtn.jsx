import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppBtn.css';

const WhatsAppBtn = () => {
  return (
    <a 
      href="https://wa.me/51934408500?text=Hola,%20quisiera%20más%20información." 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppBtn;
