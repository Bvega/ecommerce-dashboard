import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="shadow mb-6 p-4 flex justify-between items-center bg-var(--header-bg)">
      <h1 className="text-xl font-bold">REST Countries</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded shadow hover:opacity-80"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
