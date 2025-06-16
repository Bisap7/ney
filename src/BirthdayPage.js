import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './BirthdayPage.css';
import { color } from 'framer-motion';
import { Link } from 'react-router-dom';

const BirthdayPage = () => {
  const { width, height } = useWindowSize();

  // Google Drive video configuration
  const videoConfig = {
    id: "1LzZlevIV1M4iKNlh48imjEFUIHSpgK_H",
    apiKey: "YOUR_ACTUAL_API_KEY" // Replace with real API key
  };

  return (
    <div className="birthday-container">
      <Confetti width={width} height={height} />
      <h1 className="main-title">Happy Birthday, Neha ❤️</h1>

      <div className="media-center">
        {/* Option 1: Recommended - Google Drive embed */}
<iframe
  src={`https://drive.google.com/file/d/${videoConfig.id}/preview`}
  style={{
    width: "400px",
    height: "300px",
    border: "none",
    display: "block",
    margin: "0 auto",
    backgroundColor: "#000",
    borderRadius: "12px", // or any value you prefer (8px, 16px, etc.)
    overflow: "hidden" // ensures content also respects the border radius
  }}
  allow="autoplay"
  title="Birthday Video"
></iframe>

        {/* Option 2: API-based (requires proper CORS setup) */}
        {/* <video width="400" controls className="video-player" playsInline>
          <source 
            src={`https://www.googleapis.com/drive/v3/files/${videoConfig.id}?alt=media&key=${videoConfig.apiKey}`} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video> */}
      
      
  <audio controls className="audio-player">
    <source src="birrthdaysong.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  <p className="audio-caption">🎶 A melody straight from my heart 💖</p>
</div>

      <h2 className="section-title">To Neha, With Love</h2>

      {/* All paragraphs with justified text */}
      <p className="paragraph">
        Today the world quietly pauses to celebrate someone truly extraordinary. You are the kind of soul who brings light without asking for anything in return, who loves with a heart so pure that even the smallest moments spent with you leave lasting warmth. Your presence makes life softer, your kindness makes the world gentler, and your smile reminds even the weariest hearts that there is still beauty left to believe in. I hope today you feel everything you so selflessly give, endless love, genuine happiness, and a peace that fills every corner of your heart. You deserve a lifetime of dreams unfolding beautifully, of laughter that carries across the years, and of memories so precious they feel like home.
      </p>

      <p className="paragraph">
        Neha, no words can fully capture the depth of my feelings for you, but I'll try my best, because you deserve to know how much you mean to me. I am sorry for the times I've let you down, for the things that have caused distance between us. I understand the pain and disappointment you've felt, and I've spent countless moments thinking about how I could have been better for you, for us. The silence, the distance, I know they speak volumes, and they hurt me more than I can express.
      </p>

      <p className="paragraph">
        You are everything I've ever needed in my life, and it crushes me to know that I've contributed to our separation. You've always been there, offering love and light, and I haven't always reciprocated in the way you deserve. I wish I could turn back time to when we were happy, to fix the mistakes I made, and to hold you close without any doubts or regrets. But what I can do now is promise you that I will never stop working to be the person you deserve, not just for you, but for myself as well. I know it's not easy, and I don't expect things to heal overnight, but my commitment to becoming a better person remains.
      </p>

      <p className="paragraph">
        In every moment we've shared, there is still a part of me that believes in us. I believe in what we had, and I believe in the possibility of healing and starting fresh, even if it's a slow process. I'll be here, doing the work, and hoping that one day we can rebuild what was lost.
      </p>

      <p className="paragraph">
        No matter where we stand, I want you to know that you are forever in my heart, Neha. You've left an indelible mark on my life, and I will always cherish you, not just on your birthday, but every day.
      </p>

      <p className="paragraph">
        These words and everything I've said will only truly matter if you're still single, and I respect whatever path you've chosen. If you're no longer alone and have found someone else who brings you happiness, then please forget these thoughts and efforts. My love for you remains, but I can't interfere with your future. I only want you to be happy, no matter where that happiness lies.
      </p>

      <p className="paragraph">
        Thank you for being you. You are a blessing to this world, and to me.
      </p>

      {/* Songs Section */}
      <h2 className="section-title">🎶 Songs for You, Neha ❤️</h2>

      <h3 className="song-title">Song that Reminds Me of You 🥹</h3>
      <audio controls className="audio-player">
        <source src="reminds.mp3" type="audio/mpeg" />
      </audio>

      <h3 className="song-title">Song Dedicated to You ❤️</h3>
      <audio controls className="audio-player">
        <source src="dedicate.mp3" type="audio/mpeg" />
      </audio>

      <h3 className="song-title">A Special Message for You ✨</h3>
      <audio controls className="audio-player">
        <source src="personalmessage.mp3" type="audio/mpeg" />
      </audio>

      <h3 className="song-title">Untold but my forever intention ❤️</h3>
      <audio controls className="audio-player">
        <source src="rakhlu.mp3" type="audio/mpeg" />
      </audio>

      <h3 className="song-title">Song that Reminds Me of Me which was given by You 🥹</h3>
      <audio controls className="audio-player">
        <source src="lajalu.mp3" type="audio/mpeg" />
      </audio>

<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    margin: '3rem 0',
    flexWrap: 'wrap',
  }}
>
  {/* Video on the left */}
  <video
    width="400"
    controls
    style={{
      borderRadius: '20px',
      boxShadow: '0 8px 25px rgba(255, 105, 135, 0.3)',
      flexShrink: 0,
      maxWidth: '100%',
      backgroundColor: '#fff',
    }}
  >
    <source src="/videos/small/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Text on the right */}
  <ul
    style={{
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      fontSize: '1.1rem',
      color: '#333',
      maxWidth: '500px',
      lineHeight: '1.6',
      margin: 0,
    }}
  >
    <li>
      In this simple video lies the most precious soul, <strong>Neha</strong>.
    </li>
    <li>
      She has a <strong>smile</strong> that feels like the <em>first light after a long
      night</em>.
    </li>
    <li>
      Her <strong>laughter</strong> can <em>heal even the deepest scars</em>.
    </li>
    <li>
      Her <strong>eyes</strong> hold a <em>kindness</em> that words can never quite capture.
    </li>
    <li>
      Her <strong>voice</strong> carries a <em>softness</em> that quietly lingers in the heart.
    </li>
    <li>
      Every moment with her reminds me that <strong>true, patient, unconditional love</strong>{' '}
      exists.
    </li>
  </ul>
</div>


      {/* Favorite moments images */}
      <h2 className="section-title">📸 Precious Moments</h2>
      <div className="images-gallery">
        {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "8.jpg", "9.png", "55.jpg"].map((img, i) => (
          <img key={i} src={img} alt={`Memory ${i + 1}`} className="memory-image" />
        ))}
      </div>

      <video width="300" controls className="video-player">
        <source src="/videos/small/6.mp4" type="video/mp4" />
      </video>

      {/* Letter */}
<div style={{
  maxWidth: '800px',
  margin: '50px auto',
  position: 'relative',
  padding: '20px'
}}>
  <h2 style={{
    color: '#e91e63',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative',
    fontWeight: '700'
  }}>
    💌 A Letter from My Heart
    <span style={{
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '150px',
      height: '3px',
      background: 'linear-gradient(to right, transparent, #e91e63, transparent)'
    }}></span>
  </h2>
  
  <div style={{
    background: '#fff9f9',
    padding: '40px',
    borderRadius: '5px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(233, 30, 99, 0.2)',
    border: '1px solid #f8bbd0',
    backgroundImage: 'linear-gradient(#fce4ec 1px, transparent 1px), linear-gradient(90deg, #fce4ec 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundPosition: 'center',
    animation: 'fadeIn 1s ease-out forwards'
  }}>
    <div style={{
      position: 'relative',
      zIndex: '2'
    }}>
      <p style={{
        fontFamily:'roboto',
        fontSize: '2.2rem',
        color: '#e91e63',
        marginBottom: '30px',
        textAlign: 'center'
      }}>My Dearest Neha,</p>
      
      {[
        "As I sit quietly thinking of you, my heart writes a thousand unsent letters. Your smile, your laughter, your warmth, they live in the softest corners of my memories. Even in the silence and the distance between us, my heart beats with a love that has never faded.",
        "I wish you could see yourself through my eyes. You would know you are nothing less than a miracle to me. You are, and always will be, the gentlest chapter of my life, the dream I still hold onto with all my heart.",
        "Wherever life leads you, I hope it brings you the same happiness you once gave me. Thank you for being my brightest light. ✨"
      ].map((paragraph, index) => (
        <p key={index} style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '25px',
          color: '#5e2a42',
          textAlign: 'justify',
          position: 'relative',
          paddingLeft: '20px'
        }}>
          <span style={{
            position: 'absolute',
            left: '-5px',
            color: '#e91e63',
            fontSize: '0.8rem'
          }}>❤</span>
          {paragraph}
        </p>
      ))}
      
      <div style={{
        marginTop: '50px',
        textAlign: 'right',
        position: 'relative',
        paddingRight: '80px'
      }}>
        <p style={{ fontStyle: 'italic', color: '#9c27b0', marginBottom: '5px' }}>
          With all the love I have,
        </p>
        <p style={{
          fontFamily: 'roboto',
          fontSize: '1.8rem',
          color: '#e91e63',
          marginTop: '15px'
        }}>
          Bisap Bajracharya
        </p>
        <div style={{
          position: 'absolute',
          right: '0',
          bottom: '-20px',
          width: '60px',
          height: '60px',
          background: '#e91e63',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 3px 10px rgba(233, 30, 99, 0.3)',
          transform: 'rotate(15deg)'
        }}>
          <span style={{
            fontFamily: 'roboto',
            fontSize: '0.8rem',
            position: 'absolute',
            color: 'white'
          }}>Love</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Wish wall */}
      <h2 className="section-title">🌟 My Wish Wall for You, Neha</h2>
      <ul className="wish-wall">
        {[
          "happiness that never fades.",
          "for all your dreams to come true.",
          "always feel loved and valued.",
          "find peace even on your hardest days.",
          "I could hold your hand again, someday.",
          "every sunset brings you hope for a new tomorrow.",
          "keep shining no matter what life brings.",
          "know how deeply you are missed and loved.",
          "know how I always wanted you for only me.",
          "know how deeply I'm waiting for you to trust me again."
        ].map((wish, i) => (
          <li key={i}>💖 I wish you {wish}</li>
        ))}
      </ul>

{/* Birthday wishes from others */}
<div style={{
  margin: '40px 0',
  padding: '20px',
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto'
}}>
  <h2 style={{
    color: '#e91e63',
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '10px',
    borderBottom: '2px solid #f8bbd0',
    position: 'relative'
  }}>
    📸 Few birthday wishes from my people to you ❤️
    <span style={{
      position: 'absolute',
      bottom: '-5px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '3px',
      background: 'linear-gradient(to right, #ff4081, #e91e63)',
      borderRadius: '3px'
    }}></span>
  </h2>

  {/* Regular images grid */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  }}>
    {["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"].map((img, i) => (
      <div key={i} style={{
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        backgroundColor: '#fff9fa',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px', // Fixed height for consistency
        overflow: 'hidden'
      }}>
        <img
          src={img}
          alt={`Wish ${i + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    ))}
  </div>

  {/* Larger images section */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px'
  }}>
    {["21.jpg", "56.png"].map((img, i) => (
      <div key={i} style={{
        flex: '1',
        minWidth: '300px',
        maxWidth: '500px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff9fa',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={img}
          alt={`Special Wish ${i + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'contain',
            borderRadius: '8px',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    ))}
  </div>
</div>

      {/* Reply form */}
      <h2 className="section-title">💬 Neha's Reply — Answer These Questions</h2>
      <form
        action="https://formspree.io/f/xldnjovn"
        method="POST"
        className="reply-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Neha, your name"
          required
          className="form-input"
        />
        {[
          "How did you feel when we first met?",
          "What was your favorite memory of us together?",
          "What is one thing you loved the most about our relationship?",
          "What was the hardest moment or bad memory we shared?",
          "What do you think went wrong between us?",
          "Did you ever think about getting back together? Why or why not?",
          "What lessons did you learn from our time together?",
          "What do you wish I understood better about you?",
          "How do you currently feel about me?",
          "Is there anything you want to say to me now?"
        ].map((q, i) => (
          <div key={i} className="form-group">
            <label>{i + 1}. {q}</label>
            <textarea name={`q${i + 1}`} rows="2" required className="form-textarea"></textarea>
          </div>
        ))}
        <button type="submit" className="submit-button">Send Reply</button>
      </form>

<div style={{
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '30px',
  background: 'linear-gradient(135deg, #fff5f5 0%, #fff9f9 100%)'
}}>
  {/* Moment 1 */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '80px',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(255, 105, 180, 0.2)',
    animation: 'slideIn 0.8s ease-out'
  }}>
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '40px',
      background: 'linear-gradient(to right, #fff, #fff8f8)'
    }}>
      <h2 style={{
        color: '#ff4757',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '25px',
        fontFamily: 'roboto',
        textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
      }}>
        🌷 A Moment & A Message
      </h2>
      
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif'
      }}>
        The day you followed me on Instagram... I still remember it. I was so excited, I actually took a screenshot! 😄 Funny thing is, I didn't even know it was you. I had no idea we were about to write one of the most beautiful chapters of our lives. Maybe deep down, something in me felt it. That we were meant to cross paths. That something special had begun. And now... we're just a memory. I wish we could go back to that beginning. To that silly little screenshot I took with no clue that one day, you'd mean the world to me, and one day, I'd lose you too. 💔
      </p>
    </div>
    
    <div style={{
      flex: '1',
      minWidth: '300px',
      height: '400px',
      position: 'relative',
      overflow: 'hidden'
    }}>
<div style={{
  flex: '1',
  minWidth: '300px',
  height: '400px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5'
}}>
  <img 
    src="strt.jpg" 
    alt="Special Moment" 
    style={{
      width: '100%',
      height: '130%',
      objectFit: 'contain',
      objectPosition: 'center',
      transition: 'transform 0.5s ease',
      animation: 'fadeIn 0.8s ease-out forwards',
      opacity: 0
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'scale(1.03)';
      const caption = e.currentTarget.nextElementSibling;
      if (caption) caption.style.opacity = '1';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      const caption = e.currentTarget.nextElementSibling;
      if (caption) caption.style.opacity = '0';
    }}
  />
  <div style={{
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    padding: '20px',
    color: 'white',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '1.1rem',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    textAlign: 'center'
  }}>
    Our Beginning 💫
  </div>
</div>

<style>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }
`}</style>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        padding: '20px',
        color: 'white',
        fontFamily: '"Montserrat", sans-serif',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }} className="image-caption">
        Our Beginning 💫
      </div>
    </div>
  </div>

  {/* Moment 2 */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap-reverse',
    alignItems: 'center',
    marginBottom: '80px',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(155, 89, 182, 0.2)',
    animation: 'slideIn 0.8s ease-out 0.3s forwards',
    opacity: 0
  }}>
    <div style={{
      flex: '1',
      minWidth: '300px',
      height: '400px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img 
        src="1.jpg" 
        alt="Special Gift" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          animation: 'fadeInLeft 0.8s ease-out 0.5s forwards',
          opacity: 0
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        padding: '20px',
        color: 'white',
        fontFamily: '"Montserrat", sans-serif',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }} className="image-caption">
        Your Handmade Gift ✨
      </div>
    </div>
    
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '40px',
      background: 'linear-gradient(to left, #fff, #f9f0ff)'
    }}>
      <h2 style={{
        color: '#9b59b6',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '25px',
        fontFamily: 'roboto',
        textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
      }}>
        🌷 A Moment & A Message
      </h2>
      
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif'
      }}>
        You made this with your own hands, paper, thread, pen and a whole lot of love. I remember holding it and thinking "Was this really meant for me?" Not because I didn't believe in you but because no one had ever gifted me something this precious before. I questioned it not because I doubted your love but because I doubted if I was even worth that kind of love. Maybe I didn't feel like I deserved it. But here it is, still with me. A reminder that, even if for a while, I was someone's favourite. <strong>Yours.</strong>
      </p>
    </div>
  </div>

  {/* Video Section */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '80px',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(52, 152, 219, 0.2)',
    animation: 'slideIn 0.8s ease-out 0.6s forwards',
    opacity: 0
  }}>
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '40px',
      background: 'linear-gradient(to right, #fff, #f0f9ff)'
    }}>
      <h2 style={{
        color: '#3498db',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '25px',
        fontFamily: 'roboto',
        textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
      }}>
        🌷 Our Video Memory
      </h2>
      
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif'
      }}>
        💌 Just a little video... to show you how loved you are 🌸
      </p>
    </div>
    
    <div style={{
      flex: '1',
      minWidth: '300px',
      height: '400px',
      position: 'relative'
    }}>
      <video 
        controls 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          animation: 'fadeInRight 0.8s ease-out 0.8s forwards',
          opacity: 0
        }}
      >
        <source src="/videos/small/sane.mp4" type="video/mp4" />
      </video>
    </div>
  </div>

  {/* Final Moment */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap-reverse',
    alignItems: 'center',
    marginBottom: '80px',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(233, 30, 99, 0.2)',
    animation: 'slideIn 0.8s ease-out 0.9s forwards',
    opacity: 0
  }}>
    <div style={{
      flex: '1',
      minWidth: '300px',
      height: '400px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img 
        src="mendoza.jpg" 
        alt="Special Memory" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          animation: 'fadeInLeft 0.8s ease-out 1.1s forwards',
          opacity: 0
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        padding: '20px',
        color: 'white',
        fontFamily: '"Montserrat", sans-serif',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }} className="image-caption">
        Frozen in Time ❤️
      </div>
    </div>
    
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '40px',
      background: 'linear-gradient(to left, #fff, #ffebee)'
    }}>
      <h2 style={{
        color: '#e91e63',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '25px',
        fontFamily: 'roboto',
        textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
      }}>
        🌷 A Frozen Moment
      </h2>
      
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif'
      }}>
        🌷 A moment frozen in time... just like my feelings 💖
      </p>
    </div>
  </div>
</div>

<style>{`
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  div:hover > .image-caption {
    opacity: 1;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@500;700&family=Open+Sans:wght@400;500&display=swap');
`}</style>

<Link 
  to="/virtual-birthday" 
  style={{
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#ff6b8b',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(253, 121, 168, 0.3)',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(253, 121, 168, 0.4)',
      backgroundColor: '#fd79a8'
    }
  }}
>
  Virtual Birthday
</Link>
    </div>
  );
};

export default BirthdayPage;
