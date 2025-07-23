"use client";

import { useEffect } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: "config" | "set" | "event", targetId: string, config?: Record<string, unknown> | undefined) => void;
  }
}

// Type for FirstInputEntry
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

// Type for LayoutShiftEntry
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources?: LayoutShiftSource[];
}

interface LayoutShiftSource {
  node?: Node;
  currentRect?: DOMRectReadOnly;
  previousRect?: DOMRectReadOnly;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'LCP', {
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
            event_label: 'LCP'
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
              event_category: 'Web Vitals',
              event_label: 'FID'
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as LayoutShiftEntry;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals',
            event_label: 'CLS'
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 