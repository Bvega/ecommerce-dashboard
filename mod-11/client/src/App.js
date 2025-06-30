// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import CountryPage from './pages/CountryPage.jsx';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
