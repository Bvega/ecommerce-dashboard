import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className="shadow p-4 flex justify-between items-center"
      style={{ backgroundColor: 'var(--header-bg)', color: 'var(--text-color)' }}
    >
      <h1 className="text-xl font-bold">REST Countries</h1>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: 'var(--element-bg)',
          color: 'var(--text-color)',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          cursor: 'pointer'
        }}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}
