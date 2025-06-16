import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleEnter = () => {
    // Only navigate to birthday route
    navigate('/birthday'); 
  };


  
  return (
    <div style={styles.homePage}>
      <Fade triggerOnce>
        <div style={styles.videoContainer}>
<iframe
  src="https://drive.google.com/file/d/15q8zIKX4v1vsIBWkg2YlxT6AyoosB6rt/preview"
  width="640"
  height="360"
  allow="autoplay"
  style={{
    border: 'none',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    display: 'block',
    margin: '20px auto'
  }}
></iframe>


        </div>
      </Fade>

      <motion.button
        style={styles.enterButton}
        onClick={handleEnter}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enter Birthday Celebration 🎉
      </motion.button>
    </div>
  );
}

const styles = {
  homePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffebee',
    padding: '20px',
  },
  videoContainer: {
    marginBottom: '40px',
    width: '90%',
    maxWidth: '800px',
  },
  introVideo: {
    width: '100%',
    borderRadius: '10px',
  },
  enterButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#e91e63',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  }
};

export default Home;
