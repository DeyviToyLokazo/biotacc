import React, { useState, useEffect, useRef } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaUser,
  FaCommentDots,
  FaMobileAlt,
  FaPaperPlane,
  FaLeaf,
  FaBolt,
  FaUserTie,
  FaSeedling,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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

// Quick contact channels
const channels = [
  {
    id: 'contact-phone',
    href: 'tel:+51934408500',
    icon: <FaPhone />,
    title: 'Llámanos',
    value: '+51 934 408 500',
    cta: 'Llamar ahora',
    variant: 'phone'
  },
  {
    id: 'contact-whatsapp',
    href: 'https://wa.me/51934408500',
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    value: '+51 934 408 500',
    cta: 'Iniciar chat',
    variant: 'whatsapp',
    external: true
  },
  {
    id: 'contact-email',
    href: 'mailto:biotaccagrosac@biotacc.com',
    icon: <FaEnvelope />,
    title: 'Correo',
    value: 'biotaccagrosac@biotacc.com',
    cta: 'Escribir correo',
    variant: 'email'
  }
];

const benefits = [
  { icon: <FaBolt />, title: 'Respuesta rápida', text: 'Atendemos tu consulta a la brevedad posible.' },
  { icon: <FaUserTie />, title: 'Asesoría técnica', text: 'Especialistas que entienden tu cultivo.' },
  { icon: <FaSeedling />, title: 'Soluciones a medida', text: 'Productos adecuados para cada etapa.' }
];

const Contact = () => {
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

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg }
      });
      openWhatsApp();
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg }
      });
    }
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fields = [
    { name: 'name', type: 'text', label: 'Tu nombre', icon: <FaUser /> },
    { name: 'email', type: 'email', label: 'Tu correo', icon: <FaEnvelope /> },
    { name: 'phone', type: 'tel', label: 'Tu celular', icon: <FaMobileAlt /> }
  ];

  return (
    <div className="contact-page">
      {/* Animated background */}
      <div className="ct-bg" aria-hidden="true">
        <span className="ct-orb ct-orb-1" />
        <span className="ct-orb ct-orb-2" />
        <span className="ct-orb ct-orb-3" />
        <div className="ct-grid-pattern" />
        {[...Array(8)].map((_, i) => (
          <FaLeaf key={i} className={`ct-leaf ct-leaf-${i + 1}`} />
        ))}
      </div>

      <section className="ct-wrapper container">
        {/* Hero header */}
        <motion.header
          className="ct-hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="ct-badge">
            <span className="ct-pulse-dot" /> Estamos en línea para ayudarte
          </span>
          <h1 className="page-title ct-title">
            <Typewriter text="Contáctanos" delay={100} />
          </h1>
          <p className="ct-subtitle">
            Estamos listos para asesorarte. Escríbenos o llámanos, y juntos
            hagamos crecer tu cultivo con <strong>BIOTACC AGRO</strong>.
          </p>
        </motion.header>

        {/* Quick channels */}
        <motion.div
          className="ct-channels"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {channels.map((c) => (
            <motion.a
              key={c.id}
              id={c.id}
              href={c.href}
              className={`ct-channel ct-channel--${c.variant}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.97 }}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="ct-channel-glow" />
              <span className="ct-channel-icon">{c.icon}</span>
              <span className="ct-channel-title">{c.title}</span>
              <span className="ct-channel-value">{c.value}</span>
              <span className="ct-channel-cta">
                {c.cta} <FaArrowRight />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Main grid */}
        <motion.div
          className="ct-main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Info panel */}
          <motion.aside className="ct-info" variants={itemVariants}>
            <h2>¿Por qué contactarnos?</h2>
            <p className="ct-info-text">
              Nuestro equipo te acompaña en cada etapa de tu producción con
              soluciones agrícolas confiables.
            </p>

            <ul className="ct-benefits">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                >
                  <span className="ct-benefit-icon">{b.icon}</span>
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.aside>

          {/* Form */}
          <motion.div className="ct-form-card" variants={itemVariants}>
            <div className="ct-form-header">
              <span className="ct-form-icon"><FaPaperPlane /></span>
              <div>
                <h2>Envíanos un mensaje</h2>
                <p>Te responderemos por correo y WhatsApp.</p>
              </div>
            </div>

            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form-row">
                {fields.map((f) => (
                  <div
                    key={f.name}
                    className={`ct-field ${f.name === 'name' ? 'ct-field--full' : ''}`}
                  >
                    <input
                      id={`contact-input-${f.name}`}
                      type={f.type}
                      name={f.name}
                      placeholder=" "
                      value={formData[f.name]}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor={`contact-input-${f.name}`}>{f.label}</label>
                    <span className="ct-field-icon">{f.icon}</span>
                    <span className="ct-field-bar" />
                  </div>
                ))}

                <div className="ct-field ct-field--full ct-field--textarea">
                  <textarea
                    id="contact-input-message"
                    name="message"
                    placeholder=" "
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="contact-input-message">¿En qué podemos ayudarte?</label>
                  <span className="ct-field-icon"><FaCommentDots /></span>
                  <span className="ct-field-bar" />
                </div>
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                className={`ct-submit ${status.submitting ? 'is-loading' : ''}`}
                disabled={status.submitting}
                whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="ct-submit-shine" />
                {status.submitting ? (
                  <>
                    <span className="ct-spinner" /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje <FaPaperPlane className="ct-submit-plane" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status.info.msg && (
                  <motion.div
                    key={status.info.msg}
                    className={`form-status ${status.info.error ? 'error' : 'success'}`}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {status.info.error ? <FaExclamationCircle /> : <FaCheckCircle />}
                    {status.info.msg}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
