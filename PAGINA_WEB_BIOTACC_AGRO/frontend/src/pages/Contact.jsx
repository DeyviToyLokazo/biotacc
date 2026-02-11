import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaMobileAlt, FaUser, FaCommentDots } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import '../styles/Contact.css';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  // Scroll trigger logic
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
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

const Contact = () => {
  // ... (existing state and handlers)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg }
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      openWhatsApp();
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg }
      });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "51934408500";
    const waMessage = `Hola BIOTACC AGRO, mi nombre es ${formData.name}. 
Mi correo es: ${formData.email}
Mi celular es: ${formData.phone}
Consulta: ${formData.message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    const FORMSPREE_ID = "mkoowllq"; 
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        handleServerResponse(true, "¡Gracias! Tu mensaje ha sido enviado correctamente.");
      } else {
        const data = await response.json();
        handleServerResponse(false, data.error || "Hubo un error al enviar el mensaje por correo.");
      }
    } catch (error) {
      handleServerResponse(false, "Hubo un error de conexión.");
    }
  };

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="contact-page">
      <section className="section container">
        <h1 className="page-title">
          <FaMobileAlt className="title-icon" /> <Typewriter text="Contáctanos" delay={100} />
        </h1>
        
        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Info Side */}
          <motion.div className="contact-info" variants={cardVariants}>
            <h2>Información de Contacto</h2>
            <p className="contact-intro">Estamos listos para asesorarte. Escríbenos o visítanos.</p>
            
            <div className="sedes-container">
              {/* SEDE PIURA */}
              <div className="sede-block">
                <h3 className="sede-title">Sede Piura</h3>
                <ul className="contact-list">
                  <li>
                    <div className="icon-circle"><FaPhone /></div>
                    <div>
                      <strong>Llámanos</strong>
                      <p>+51 981 029 680</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-circle"><FaWhatsapp /></div>
                    <div>
                      <strong>WhatsApp</strong>
                      <p>+51 981 029 680</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-circle"><FaEnvelope /></div>
                    <div>
                      <strong>Correo</strong>
                      <p>cesar_merino@biotacc.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-circle"><FaMapMarkerAlt /></div>
                    <div>
                      <strong>Ubicación</strong>
                      <p>Fundo Mundaca S/N, Catacaos - Piura</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* SEDE FERREÑAFE */}
              <div className="sede-block">
                <h3 className="sede-title">Sede Ferreñafe</h3>
                <ul className="contact-list">
                  <li>
                    <div className="icon-circle"><FaPhone /></div>
                    <div>
                      <strong>Llámanos</strong>
                      <p>+51 917 152 775</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-circle"><FaWhatsapp /></div>
                    <div>
                      <strong>WhatsApp</strong>
                      <p>+51 917 152 775</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-circle"><FaEnvelope /></div>
                    <div>
                      <strong>Correo</strong>
                      <p>jymani_santamaria@biotacc.com</p>
                    </div>
                  </li>
                  <li>
                     <div className="icon-circle"><FaMapMarkerAlt /></div>
                     <div>
                       <strong>Ubicación</strong>
                       <p>Mz. E Lt. 08, Ferreñafe - Lambayeque</p>
                     </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div className="contact-form-container" variants={cardVariants}>
            <h2>Envíanos un mensaje</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group input-with-icon">
                <FaUser className="input-icon" />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Tu Nombre" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group input-with-icon">
                <FaEnvelope className="input-icon" />
                 <input 
                  type="email" 
                  name="email"
                  placeholder="Tu Correo" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group input-with-icon">
                <FaMobileAlt className="input-icon" />
                 <input 
                  type="tel" 
                  name="phone"
                  placeholder="Tu Celular" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group input-with-icon">
                <FaCommentDots className="input-icon textarea-icon" />
                 <textarea 
                  name="message"
                  placeholder="¿En qué podemos ayudarte?" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={status.submitting}>
                {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {status.info.msg && (
                <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                  {status.info.msg}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
