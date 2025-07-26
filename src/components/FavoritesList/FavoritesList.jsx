import React, { useContext } from 'react';
import BookCard from '../BookCard/BookCard';
import { FavoritesContext } from '../../context/FavoritesContext';
import './FavoritesList.css';

const FavoritesList = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleToggleFavorite = (book) => {
    removeFavorite(book.id);
  };

  return (
    <div className="favorites-list">
      <h2>Your Favorite Books</h2>
      {favorites.length === 0 ? (
        <p className="empty-message">You haven't added any favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
