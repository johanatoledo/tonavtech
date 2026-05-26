"use client"; 

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = e => {
      const target = e.target.closest('a'); 
      if (target && target.hash) {
        if (target.pathname === window.location.pathname) {
          const el = document.querySelector(target.hash);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}