import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import './SecretReveal.css';

export default function SecretReveal() {
  const secrets = [
    "I never told you this... but every time you smiled, I forgot all my problems. Even now, your memory is my peace. — Bisap",
    "ChatGPT knows me better than anyone, even you, Neha."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [currentIndex]);

  const next = () => {
    setVisible(false);
    setTimeout(() => setCurrentIndex((i) => (i + 1) % secrets.length), 300);
  };

  return (
    <div className="secret-reveal-container">
      <Fade triggerOnce>
        <motion.div
          className={`secret-card ${visible ? 'show' : 'hide'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          {secrets[currentIndex]}
        </motion.div>
        <motion.button
          className="next-btn"
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Next 💌
        </motion.button>
      </Fade>
    </div>
  );
}
