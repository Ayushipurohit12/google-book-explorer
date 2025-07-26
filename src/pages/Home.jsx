import React, { useState, useContext, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';
import SearchForm from '../components/SearchForm/SearchForm';
import BookCard from '../components/BookCard/BookCard';
import { FavoritesContext } from '../context/FavoritesContext';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  // Create a Set for fast lookups of favorite IDs
  const favoriteSet = useMemo(() => new Set(favorites.map(fav => fav.id)), [favorites]);

  // useCallback ensures handler is memoized
  const handleToggleFavorite = useCallback((book) => {
    const isFavorite = favoriteSet.has(book.id);
    isFavorite ? removeFavorite(book.id) : addFavorite(book);
  }, [favoriteSet, addFavorite, removeFavorite]);

  // Memoize the search handler with debounce
  const handleSearch = useMemo(() =>
    debounce(async ({ title, author, genre }) => {
      const queryParts = [
        title ? `intitle:${title}` : '',
        author ? `inauthor:${author}` : '',
        genre || ''
      ];
      const query = queryParts.filter(Boolean).join('+');

      setLoading(true);
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
        const data = await res.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    }, 500) // 500ms debounce delay
  , []);

  return (
    <div className="home-page">
      <SearchForm onSearch={handleSearch} />

      {loading && <p className="loading-message">Searching books...</p>}

      {!loading && books.length > 0 && (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFavorite={favoriteSet.has(book.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}

      {!loading && books.length === 0 && (
        <p className="no-results-message">Try searching for a book by title, author, or genre.</p>
      )}
    </div>
  );
};

export default Home;
