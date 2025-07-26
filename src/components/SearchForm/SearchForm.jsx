import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !author && !genre) {
      setError('Please enter at least one search field.');
      return;
    }

    setError('');
    onSearch({ title, author, genre });
  };

  return (
   <form className="search-form" onSubmit={handleSubmit}>
  <div className="search-fields">
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      placeholder="Author"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
    <input
      type="text"
      placeholder="Genre / Keyword"
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    />
    <button type="submit" className="search-button">Search</button>
  </div>

  {error && <p className="error">{error}</p>}
</form>

  );
};

export default SearchForm;
