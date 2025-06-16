import React from 'react';
import './TheEnd.css'; // We'll create this CSS file

const TheEnd = () => {
  return (
    <div className="theend-container">
      <div className="content-wrapper">
        <video 
          controls 
          autoPlay 
          className="end-video"
        >
          <source src="/videos/small/theend.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
