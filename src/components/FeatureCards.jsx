import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './FeatureCards.css';

const FeatureCard = ({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
  delay = 0,
  className = '',
  ...props
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay * 0.2 + 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className={`feature-card ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      {...props}
    >
      <motion.div className="feature-icon" variants={iconVariants}>
        {icon}
      </motion.div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {link && (
        <a href={link} className="feature-link">
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

const FeatureCards = ({
  features = [],
  columns = 3,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`feature-cards-container columns-${columns} ${className}`}
      {...props}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          link={feature.link}
          linkText={feature.linkText}
          delay={index}
        />
      ))}
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
};

FeatureCards.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ).isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4]),
  className: PropTypes.string,
};

export { FeatureCards, FeatureCard };