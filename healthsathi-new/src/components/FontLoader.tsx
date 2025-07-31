'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Load Alice font with optimization
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Alice&display=swap';
    link.media = 'print';
    
    link.onload = () => {
      link.media = 'all';
    };
    
    document.head.appendChild(link);
    
    // Cleanup
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null;
} 