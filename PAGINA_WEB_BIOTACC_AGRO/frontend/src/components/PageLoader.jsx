import React, { useState, useEffect } from 'react';
import '../styles/PageLoader.css';

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState('loading'); // 'loading' | 'done' | 'exit'
  const [text, setText]         = useState('Iniciando...');

  const messages = [
    { at: 0,   msg: 'Iniciando...' },
    { at: 20,  msg: 'Cargando recursos...' },
    { at: 45,  msg: 'Preparando productos...' },
    { at: 70,  msg: 'Optimizando experiencia...' },
    { at: 90,  msg: 'Casi listo...' },
    { at: 100, msg: '¡Bienvenido a BIOTACC AGRO!' },
  ];

  /* ── Progreso incremental ─────────────────── */
  useEffect(() => {
    let current = 0;

    const tick = () => {
      // velocidad variable: rápido al inicio, más lento cerca del final
      const remaining = 100 - current;
      const step = remaining > 60 ? 3
                 : remaining > 30 ? 1.5
                 : remaining > 10 ? 0.6
                 : 0.3;

      current = Math.min(current + step, 100);
      setProgress(Math.floor(current));

      // actualizar mensaje
      const match = [...messages].reverse().find(m => current >= m.at);
      if (match) setText(match.msg);

      if (current < 100) {
        requestAnimationFrame(tick);
      } else {
        setPhase('done');
        // pequeña pausa antes del fade-out
        setTimeout(() => {
          setPhase('exit');
          setTimeout(onComplete, 600); // duración del fade-out
        }, 500);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`page-loader ${phase === 'exit' ? 'page-loader--exit' : ''}`}>

      {/* Partículas de fondo */}
      <div className="loader-particles">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>

      {/* Contenido central */}
      <div className="loader-center">

        {/* Logo con brillo */}
        <div className={`loader-logo-wrap ${phase === 'done' ? 'loader-logo-wrap--done' : ''}`}>
          <img
            src="/images/logo-main.png"
            alt="BIOTACC AGRO"
            className="loader-logo"
          />
          <div className="loader-logo__glow" />
        </div>

        {/* Nombre */}
        <h1 className="loader-brand">
          BIOTACC <span>AGRO</span>
        </h1>
        <p className="loader-tagline">Innovación al servicio del campo</p>

        {/* Barra de progreso */}
        <div className="loader-bar-wrap">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="loader-bar-glow"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Porcentaje + mensaje */}
        <div className="loader-meta">
          <span className="loader-pct">{progress}%</span>
          <span className="loader-msg">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
