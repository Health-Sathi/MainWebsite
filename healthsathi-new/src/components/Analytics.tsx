"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Custom analytics hook for tracking user behavior
export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined') {
      // Google Analytics 4 (replace with your measurement ID)
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackCallAttempt = () => {
    trackEvent('call_attempt', {
      event_category: 'engagement',
      event_label: 'ai_doctor_call'
    });
  };

  const trackQRCodeView = () => {
    trackEvent('qr_code_view', {
      event_category: 'engagement',
      event_label: 'desktop_qr_modal'
    });
  };

  const trackChatOpen = () => {
    trackEvent('chat_open', {
      event_category: 'engagement',
      event_label: 'support_chat'
    });
  };

  return {
    trackEvent,
    trackCallAttempt,
    trackQRCodeView,
    trackChatOpen
  };
}

// Performance monitoring component
export default function Analytics() {
  useEffect(() => {
    // Monitor Core Web Vitals - temporarily disabled due to import issues
    // if (typeof window !== 'undefined') {
    //   import('web-vitals').then((webVitals) => {
    //     webVitals.getCLS(console.log);
    //     webVitals.getFID(console.log);
    //     webVitals.getFCP(console.log);
    //     webVitals.getLCP(console.log);
    //     webVitals.getTTFB(console.log);
    //   });
    // }
  }, []);

  return null;
} 