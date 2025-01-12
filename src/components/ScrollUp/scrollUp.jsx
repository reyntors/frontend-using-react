import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#000000',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0, // Fade in or out
        transition: 'opacity 0.5s ease-in-out', // Smooth fade effect
        pointerEvents: isVisible ? 'auto' : 'none', // Prevent clicks when invisible
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '8px' }} />
      Scroll to Top
    </button>
  );
};

export default ScrollUp;
