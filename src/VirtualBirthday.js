import React, { useEffect, useState } from 'react';
import './VirtualBirthday.css';

function VirtualBirthday() {
  const [activeAnimation, setActiveAnimation] = useState(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // Asset paths
  const assets = {
    images: {
      tsundere: 'tsundere.png',
      kiss: 'kiss.png',
      aarti: 'aarti.png',
      hugGif: 'hug.gif',
      kissGif: 'kiss.gif'
    },
    videos: {
      birthday: '/videos/small/swap.mp4'
    },
    audio: {
      hug: 'ynag.mp3',
      kiss: 'kissy.mp3',
      aarti: 'pashu.mp3'
    }
  };

  // Preload assets
  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Promise.all([
          ...Object.values(assets.images).map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            });
          }),
          new Promise(resolve => {
            const video = document.createElement('video');
            video.src = assets.videos.birthday;
            video.onloadedmetadata = resolve;
            video.onerror = resolve;
          })
        ]);
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Asset loading error:', error);
        setAssetsLoaded(true); // Continue even if some assets fail
      }
    };

    loadAssets();
  }, []);

  // Floating hearts animation
  useEffect(() => {
    if (!assetsLoaded) return;

    const heartEmojis = ['💖', '💗', '💓', '💘', '💝', '💞', '💕'];
    const hearts = [];
    
    const interval = setInterval(() => {
      const container = document.getElementById('heartsContainer');
      if (!container) return;
      
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
      heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(heart);
      hearts.push(heart);
      
      setTimeout(() => heart.remove(), 4000);
    }, 300);

    return () => {
      clearInterval(interval);
      hearts.forEach(heart => heart.remove());
    };
  }, [assetsLoaded]);

  const actions = [
    {
      type: 'hug',
      title: 'Virtual Hug',
      description: 'Experience the warmest digital embrace ever!',
      imgSrc: assets.images.tsundere,
      fallbackImg: 'https://i.imgur.com/8WJfZP5.png'
    },
    {
      type: 'kiss',
      title: 'Virtual Kiss',
      description: 'A sweet digital kiss just for you!',
      imgSrc: assets.images.kiss,
      fallbackImg: 'https://i.imgur.com/3GJZQ2O.png'
    },
    {
      type: 'aarti',
      title: 'Virtual Aarti',
      description: 'Experience the divine light digitally!',
      imgSrc: assets.images.aarti,
      fallbackImg: 'https://i.imgur.com/7WXJz1P.png'
    }
  ];

  const animations = [
    {
      type: 'hug',
      title: 'Virtual Hug Activated! 🤗',
      message: `Sending you the warmest, tightest virtual hug!<br>
        Imagine me wrapping my arms around you right now!<br><br>
        <span style="color: var(--hug-color); font-weight: bold;">(This is virtual, but I'm ready to give you real hugs anytime!)</span>`,
      buttonText: 'Play Hug Sound'
    },
    {
      type: 'kiss',
      title: 'Virtual Kiss Delivered! 💋',
      message: `A sweet virtual kiss has been placed on your lips! Mwah! 😘<br>
        Can you feel the warmth?<br><br>
        <span style="color: var(--kiss-color); font-weight: bold;">(This kiss is virtual, but my real ones are even better!)</span>`,
      buttonText: 'Play Kiss Sound'
    },
    {
      type: 'aarti',
      title: 'Virtual Aarti Experience! 🪔',
      message: `Experience the divine light virtually!<br>
        May this aarti bring you blessings and joy!<br><br>
        <span style="color: var(--aarti-color); font-weight: bold;">(This is a virtual aarti, but let's go for a real one soon!)</span>`,
      buttonText: 'Play Aarti Bell'
    }
  ];

  const showAnimation = (type) => {
    setActiveAnimation(type);
    playSound(type);
  };

  const closeAnimation = () => {
    setActiveAnimation(null);
  };

  const playSound = (type) => {
    const sound = document.getElementById(`${type}Sound`);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.error("Audio play failed:", e));
    }
  };

  const startHugAnimation = () => {
    const container = document.getElementById('hugVisual');
    if (!container) return;
    
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = assets.images.hugGif;
    img.alt = "Hug animation";
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.animation = 'pulse 0.8s infinite alternate';
    img.onerror = () => {
      img.src = 'https://i.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif';
    };
    container.appendChild(img);
  };

  const startKissAnimation = () => {
    const container = document.getElementById('kissVisual');
    if (!container) return;
    
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = assets.images.kissGif;
    img.alt = "Kiss animation";
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.onerror = () => {
      img.src = 'https://i.giphy.com/media/3o7TKSha7Nx5LOLEDI/giphy.gif';
    };
    container.appendChild(img);
  };

  const startAartiAnimation = () => {
    const container = document.getElementById('aartiLights');
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
      const light = document.createElement('div');
      light.style.position = 'absolute';
      light.style.width = '4px';
      light.style.height = '4px';
      light.style.borderRadius = '50%';
      light.style.backgroundColor = `hsl(${Math.random() * 60 + 30}, 100%, 70%)`;
      light.style.boxShadow = `0 0 10px 2px hsl(${Math.random() * 60 + 30}, 100%, 70%)`;
      light.style.left = Math.random() * 100 + '%';
      light.style.top = Math.random() * 100 + '%';
      light.style.animation = `flicker ${Math.random() * 2 + 1}s infinite alternate`;
      container.appendChild(light);
    }
  };

  useEffect(() => {
    if (activeAnimation && assetsLoaded) {
      switch(activeAnimation) {
        case 'hug': startHugAnimation(); break;
        case 'kiss': startKissAnimation(); break;
        case 'aarti': startAartiAnimation(); break;
      }
    }
  }, [activeAnimation, assetsLoaded]);

  if (!assetsLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading your special birthday experience...</p>
      </div>
    );
  }

  return (
    <div className="virtual-birthday">
      <div id="heartsContainer" className="hearts"></div>
      
      <div className="container">
        <h1 className="title">🎀 Virtual Birthday Love for Neha! 🎀</h1>
        
        <div className="birthday-cake">🎂✨</div>
        
        <div className="message">
          Happy Birthday Neha! 🎉<br />
          Click any option below for a virtual experience...<br />
          <span className="real-offer">(But I'm totally ready to do it for real too!)</span>
        </div>
        
        <div className="action-container">
          {actions.map(action => (
            <div 
              key={action.type}
              className={`action-option ${action.type}-option`}
              onClick={() => showAnimation(action.type)}
            >
              <img 
                src={action.imgSrc} 
                alt={action.title}
                onError={(e) => e.target.src = action.fallbackImg}
                className="action-image"
              />
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
            </div>
          ))}
        </div>
        
        <div className="footer">
          Neha's special day • Happy Birthday! • あなたが幸せでありますように
        </div>
        
        <div className="video-section">
          <h2 className="video-title">What I felt after you walked away</h2>
          <video controls autoPlay className="birthday-video">
            <source src={assets.videos.birthday} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button 
            className="next-button"
            onClick={() => window.location.href = '/realpage'}
          >
            Next up !!!
          </button>
        </div>
      </div>
      
      {animations.map(anim => (
        <div 
          key={anim.type}
          id={`${anim.type}Animation`}
          className={`animation-container ${activeAnimation === anim.type ? 'active' : ''}`}
          onClick={(e) => e.target === e.currentTarget && closeAnimation()}
        >
          <div className="animation-content">
            <span className="close-btn" onClick={closeAnimation}>×</span>
            <h2 className="animation-title" style={{ color: `var(--${anim.type}-color)` }}>
              {anim.title}
            </h2>
            
            <div id={`${anim.type}Visual`} className="animation-visual">
              {anim.type === 'kiss' && (
                <div id="kissHearts" className="hearts-overlay"></div>
              )}
              {anim.type === 'aarti' && (
                <div id="aartiLights" className="lights-overlay"></div>
              )}
              <div className="animation-image-container">
                <img 
                  src={anim.type === 'hug' ? assets.images.hugGif : 
                       anim.type === 'kiss' ? assets.images.kissGif : 
                       assets.images.aarti}
                  alt={anim.title}
                  className="animation-image"
                  onError={(e) => {
                    e.target.src = actions.find(a => a.type === anim.type)?.fallbackImg;
                  }}
                />
              </div>
            </div>
            
            <p 
              className="animation-message"
              dangerouslySetInnerHTML={{ __html: anim.message }}
            ></p>
            
            <button 
              className="animation-button"
              style={{ background: `var(--${anim.type}-color)` }}
              onClick={() => playSound(anim.type)}
            >
              {anim.buttonText}
            </button>
          </div>
        </div>
      ))}
      
      <audio id="hugSound" src={assets.audio.hug}></audio>
      <audio id="kissSound" src={assets.audio.kiss}></audio>
      <audio id="aartiSound" src={assets.audio.aarti}></audio>
    </div>
  );
}

export default VirtualBirthday;
