import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
