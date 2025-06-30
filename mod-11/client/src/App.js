import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeProvider from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
