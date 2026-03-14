import React, { useState, useEffect } from 'react';
import 'nes.css/css/nes.min.css';

const PixelNotebook = () => {
  const [content, setContent] = useState("Welcome!");
  const [hue, setHue] = useState(0);
  const [scale, setScale] = useState(1);

  // This effect scales the notebook so it never overflows the screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setScale(width / 500); // Scale down based on a 500px "ideal" width
      } else {
        setScale(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabs = [
    { label: 'me', top: '10.5%', text: 'Created by: PixelDev', color: 0 },
    { label: 'cs', top: '24.5%', text: 'CS Projects: 8-bit Edition', color: 190 },
    { label: 'cse', top: '38.5%', text: 'Engineering Log #402', color: 140 },
    { label: 'misc', top: '53.5%', text: 'Found a secret key!', color: 280 },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#212529',
      overflow: 'hidden'
    }}>
      
      {/* THE SCALE WRAPPER */}
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        transition: 'transform 0.2s ease-out'
      }}>
        
        {/* THE NOTEBOOK IMAGE */}
        <div style={{
          position: 'relative',
          width: '400px', // Set to your image's base width
          height: '460px', // Set to your image's base height
          backgroundImage: `url('/front-page.png')`,
          backgroundSize: '100% 100%',
          imageRendering: 'pixelated',
          filter: `hue-rotate(${hue}deg)`,
          transition: 'filter 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95)'
        }}>

          {/* TEXT AREA (Absolute over the cloud) */}
          <div style={{
            position: 'absolute',
            top: '32%',
            left: '18%',
            width: '58%',
            height: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '12px',
            lineHeight: '1.6',
            color: '#444',
            filter: `hue-rotate(-${hue}deg)` // Keeps text color stable
          }}>
            {content}
          </div>

          {/* TAB HITBOXES (Percentage-based) */}
          {tabs.map((tab) => (
            <div
              key={tab.label}
              onClick={() => {
                setHue(tab.color);
                setContent(tab.text);
              }}
              style={{
                position: 'absolute',
                right: '4%',
                top: tab.top,
                width: '12%',
                height: '11%',
                cursor: 'pointer',
                // backgroundColor: 'rgba(255,0,0,0.2)' // Uncomment to debug hitbox positions!
              }}
            />
          ))}
        </div>

        {/* NES.css BUTTON BOTTOM OVERLAY */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
           <button 
             className="nes-btn is-primary"
             onClick={() => window.open('https://google.com', '_blank')}
             style={{ fontSize: '10px' }}
           >
             Visit Link
           </button>
        </div>
      </div>
    </div>
  );
};

export default PixelNotebook;