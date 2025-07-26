import React, { createContext, useState, useEffect } from 'react';

// Create context
export const FavoritesContext = createContext();

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    if (!favorites.find((fav) => fav.id === book.id)) {
      setFavorites((prev) => [...prev, book]);
    }
  };

  const removeFavorite = (bookId) => {
    setFavorites((prev) => prev.filter((book) => book.id !== bookId));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
