import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FloatingActionButton = ({
  icon = 'chat',
  label = '',
  color = 'primary',
  position = 'bottom-right',
  onClick,
  className,
  ...props
}) => {
  // Position styles
  const positionStyles = {
    'bottom-right': { bottom: '2rem', right: '2rem' },
    'bottom-left': { bottom: '2rem', left: '2rem' },
    'top-right': { top: '2rem', right: '2rem' },
    'top-left': { top: '2rem', left: '2rem' },
  };

  // Get the appropriate icon
  const getIcon = () => {
    switch (icon) {
      case 'chat':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" />
          </svg>
        );
      case 'add':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        );
      case 'email':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" />
          </svg>
        );
    }
  };

  return (
    <motion.button
      className={`floating-action-button ${color} ${className || ''}`}
      style={positionStyles[position]}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <motion.div
        className="pulse-effect"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="icon">{getIcon()}</span>
      {label && <span className="label">{label}</span>}
    </motion.button>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.oneOf(['chat', 'add', 'email']),
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  position: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default FloatingActionButton;