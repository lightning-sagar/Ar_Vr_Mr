'use client';
import { useEffect, useState, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setDirection('up');
    }

    setScrollY(currentScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const getScrollProgress = () => {
    if (typeof window !== 'undefined' && document) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      return scrollY / docHeight;
    }
    return 0; 
  };

 
  const isInViewport = (element: HTMLElement) => {
    if (typeof window !== 'undefined') {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return false; 
  };


  const getParallaxOffset = (speed: number = 0.5) => {
    return scrollY * speed;
  };


  const scrollToElement = (elementId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return {
    scrollY,
    direction,
    progress: getScrollProgress(),
    isInViewport,
    getParallaxOffset,
    scrollToElement,
  };
};

export const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};
export const scrollRevealConfig = {
  viewport: { once: true, margin: "-100px" },
  initial: "hidden",
  whileInView: "visible",
  exit: "exit",
  variants: scrollAnimationVariants
};

export const scrollEasing = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
};

export const scrollUtils = {
  isFullyVisible: (element: HTMLElement) => {
    if (typeof window !== 'undefined') {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    return false;
  },

  isPartiallyVisible: (element: HTMLElement) => {
    if (typeof window !== 'undefined') {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
 rect.bottom > 0
      );
    }
    return false; 
  },

  getScrollDirection: (currentScroll: number, lastScroll: number, threshold = 5) => {
    const diff = Math.abs(currentScroll - lastScroll);
    if (diff < threshold) return null;
    return currentScroll > lastScroll ? 'down' : 'up';
  },

  getScrollSpeed: (currentScroll: number, lastScroll: number, timeFrame: number) => {
    return Math.abs(currentScroll - lastScroll) / timeFrame;
  }
};