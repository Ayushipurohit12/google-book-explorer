import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error('Error fetching book details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!book) return <p className="error">Book not found.</p>;

  const { volumeInfo } = book;
  const {
    title,
    authors,
    description,
    publisher,
    publishedDate,
    categories,
    imageLinks,
  } = volumeInfo;

  return (
    <div className="book-details">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <div className="book-container">
        <img
          className="details-image"
          src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x195?text=No+Cover'}
          alt={title}
        />
        <div className="details-content">
          <h2>{title}</h2>
          <p><strong>Author(s):</strong> {authors?.join(', ') || 'Unknown'}</p>
          {categories && <p><strong>Categories:</strong> {categories.join(', ')}</p>}
          {publisher && <p><strong>Publisher:</strong> {publisher}</p>}
          {publishedDate && <p><strong>Published:</strong> {publishedDate}</p>}
        <div
          className="details-description"
          dangerouslySetInnerHTML={{
            __html: description || '<p>No description available.</p>',
          }}
        ></div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
