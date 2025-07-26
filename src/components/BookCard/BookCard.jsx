import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, isFavorite, onToggleFavorite }) => {
  const { id, volumeInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    onToggleFavorite(book);
  };

  const toggleDescription = (e) => {
    e.preventDefault(); // prevent navigation
    setExpanded(!expanded);
  };

  const displayDescription = () => {
    if (!description) return 'No description available.';
    if (expanded) return description;
    return description.length > 150 ? `${description.slice(0, 150)}...` : description;
  };

  return (
    <div className="book-card">
      <Link to={`/book/${id}`} className="book-link">
        <img
          src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x195?text=No+Cover'}
          alt={title}
          className="book-image"
        />
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <p className="book-authors">{authors?.join(', ') || 'Unknown Author'}</p>
          <p className="book-description">{displayDescription()}</p>
          {description && description.length > 150 && (
            <button className="read-more" onClick={toggleDescription}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </Link>
      <button className="favorite-button" onClick={handleClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default React.memo(BookCard);
