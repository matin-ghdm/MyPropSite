import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting
          ? 'opacity-100 translate-y-2'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
