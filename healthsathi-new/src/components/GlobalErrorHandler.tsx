"use client";

import { useEffect } from 'react';

export default function GlobalErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Unhandled promise rejection:', event.reason);
      }
      
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: `Unhandled promise rejection: ${event.reason}`,
          fatal: false
        });
      }
    };

    // Handle unhandled errors
    const handleError = (event: ErrorEvent) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Unhandled error:', event.error);
      }
      
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: `Unhandled error: ${event.message}`,
          fatal: false
        });
      }
    };

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    // Cleanup
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return null; // This component doesn't render anything
} 