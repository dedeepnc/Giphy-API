/**
 * App Component
 * 
 * This component serves as the main entry point for the application.
 * It manages the dark mode state based on the user's system preference and renders the appropriate layout.
 * 
 * Members: darkMode
 * Methods: None
 * Parameters: None
 */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ChartPage from './pages/ChartPage';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import Search from './pages/Search';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check if user's system preference is for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set dark mode based on system preference
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="projects" element={<ChartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
