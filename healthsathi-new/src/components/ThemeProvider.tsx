"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Determine the resolved theme based on system preference
    const getResolvedTheme = (): 'light' | 'dark' => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const updateResolvedTheme = () => {
      const newResolvedTheme = getResolvedTheme();
      setResolvedTheme(newResolvedTheme);
      
      // Update document attributes
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newResolvedTheme);
      
      // Update meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', newResolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff');
      }
    };

    updateResolvedTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      updateResolvedTheme();
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme-aware text components
export function ThemeText({ 
  children, 
  className = "", 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'inverse';
}) {
  const baseClasses = "transition-colors duration-200";
  const variantClasses = {
    primary: "text-theme-primary",
    secondary: "text-theme-secondary", 
    tertiary: "text-theme-tertiary",
    muted: "text-theme-muted",
    inverse: "text-theme-inverse"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

// Theme-aware background components
export function ThemeBackground({ 
  children, 
  className = "", 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
}) {
  const baseClasses = "transition-colors duration-200";
  const variantClasses = {
    primary: "bg-theme-primary",
    secondary: "bg-theme-secondary",
    tertiary: "bg-theme-tertiary", 
    inverse: "bg-theme-inverse"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

// Theme-aware card component
export function ThemeCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`bg-card text-card-foreground border border-border rounded-lg p-6 transition-colors duration-200 ${className}`}>
      {children}
    </div>
  );
} 