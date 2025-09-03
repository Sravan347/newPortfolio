import { useEffect, useRef } from 'react';

export const useTilt = (options = {}) => {
  const ref = useRef(null);
  
  const defaultOptions = {
    scale: 1.05,
    speed: 1000,
    max: 15,
    perspective: 1000,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    transition: true,
    reset: true,
    glare: false,
    'max-glare': 1,
    ...options
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeout;

    const handleMouseEnter = () => {
      element.style.willChange = 'transform';
      element.style.transition = '';
    };

    const handleMouseMove = (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const tiltX = (y - 0.5) * defaultOptions.max;
      const tiltY = (x - 0.5) * -defaultOptions.max;
      
      const transform = `
        perspective(${defaultOptions.perspective}px) 
        rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg) 
        scale3d(${defaultOptions.scale}, ${defaultOptions.scale}, ${defaultOptions.scale})
      `;
      
      element.style.transform = transform;
    };

    const handleMouseLeave = () => {
      if (defaultOptions.reset) {
        element.style.transition = `transform ${defaultOptions.speed}ms ${defaultOptions.easing}`;
        element.style.transform = `
          perspective(${defaultOptions.perspective}px) 
          rotateX(0deg) 
          rotateY(0deg) 
          scale3d(1, 1, 1)
        `;
        
        timeout = setTimeout(() => {
          element.style.willChange = 'auto';
        }, defaultOptions.speed);
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, []);

  return ref;
};