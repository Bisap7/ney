import React from 'react';
import './TheEnd.css'; // We'll create this CSS file

const TheEnd = () => {
  return (
    <div className="theend-container">
      <div className="content-wrapper">
<iframe
  src="https://drive.google.com/file/d/1rgwNJa0igKF320a4wlQPpcPDssiWPG-G/preview"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title="Birthday Video"
  style={{
    maxWidth: '150%',
    maxHeight: '60vh',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    display: 'block',
    margin: '0 auto',
    width: '100%',
    height: '60vh',
  }}
></iframe>


        <div className="end-message">
          <p><strong>I hope those you chose over me remember your special day the way I did.</strong></p>
          <p><strong>Hope you get the calls from your loved ones. Your dad especially. You were desperate last time.</strong></p>
          <p><strong>Tata, see you again next year if I don't play the game of love with anyone else.</strong></p>
          <p><strong>Otherwise, I'll be doing all this... for her.</strong></p>
        </div>
      </div>
    </div>
  );
};

export default TheEnd;
