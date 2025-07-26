import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import './App.css';

// Lazy load BookDetails for code-splitting
const BookPage = lazy(() => import('./pages/BookPage'));

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/book/:id"
            element={
              <Suspense fallback={<div className="loading-message">Loading book...</div>}>
                <BookPage />
              </Suspense>
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
