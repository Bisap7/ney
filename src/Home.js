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
          <video 
            controls
            loop
            style={styles.introVideo}
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
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