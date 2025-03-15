import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './ScrollToTopButton.css';

const ScrollToTopButton = ({
  showAtPosition = 300,
  color = 'primary',
  size = 'medium',
  position = 'bottom-right',
  smooth = true,
  showIcon = true,
  label = '',
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Position styles
  const positionStyles = {
    'bottom-right': { bottom: '2rem', right: '2rem' },
    'bottom-left': { bottom: '2rem', left: '2rem' },
    'bottom-center': { bottom: '2rem', left: '50%', transform: 'translateX(-50%)' },
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAtPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAtPosition]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`scroll-to-top ${color} ${size} ${className}`}
          style={positionStyles[position]}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
          {...props}
        >
          {showIcon && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
          )}
          {label && <span className="scroll-label">{label}</span>}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

ScrollToTopButton.propTypes = {
  showAtPosition: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  position: PropTypes.oneOf(['bottom-right', 'bottom-left', 'bottom-center']),
  smooth: PropTypes.bool,
  showIcon: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default ScrollToTopButton;