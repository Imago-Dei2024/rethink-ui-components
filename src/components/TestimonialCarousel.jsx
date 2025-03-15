import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({
  testimonials = [],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    let timer;
    if (autoPlay && testimonials.length > 1) {
      timer = setInterval(() => {
        nextSlide();
      }, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentIndex, autoPlay, interval, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={`testimonial-carousel ${className}`} {...props}>
      <div className="carousel-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="testimonial-slide"
          >
            {testimonials[currentIndex].image && (
              <div className="testimonial-image">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name || 'Testimonial'}
                />
              </div>
            )}
            <div className="testimonial-content">
              <div className="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                </svg>
              </div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                {testimonials[currentIndex].title && (
                  <p className="author-title">{testimonials[currentIndex].title}</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {showArrows && testimonials.length > 1 && (
          <>
            <button
              className="carousel-arrow prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="carousel-arrow next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {showDots && testimonials.length > 1 && (
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  className: PropTypes.string,
};

export default TestimonialCarousel;