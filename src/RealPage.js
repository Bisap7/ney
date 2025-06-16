import React from 'react';
import './RealPage.css'; // We'll create this CSS file

const RealPage = () => {
  return (
    <div className="realpage-container">
      <h1 className="main-title">
        I don't know what's happening here !!!!!!
      </h1>

     <div style={{
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '500px',
  margin: '20px auto',
  textAlign: 'center'
}}>
  <iframe
    src="https://drive.google.com/file/d/1LyX65Y85iziln4gi5A_V8lx2tla1Pl3r/preview"
    style={{
      width: '100%',
      height: '300px',
      border: 'none',
      borderRadius: '8px',
      marginBottom: '15px'
    }}
    allow="autoplay"
    title="Blessing Video"
  ></iframe>
  <p style={{
    color: '#555',
    fontSize: '16px',
    fontStyle: 'italic',
    margin: '10px 0 0'
  }}>
    Now you'll be blessed. #inmyprayers
  </p>
</div>

      <div className="video-card">
        <video controls className="video-player">
          <source src="/videos/editone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">
          You'll relive this moment. You'll be looking like this again.
        </p>
      </div>

      <div className="video-card">
        <video controls className="video-player">
          <source src="/videos/edittwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">
          Couldn't pick one so here we go again.
        </p>
      </div>

      <button
        onClick={() => window.location.href='/TheEnd'}
        className="end-button"
      >
        Click here for the end credit. Watch everything.
      </button>
    </div>
  );
};

export default RealPage;
