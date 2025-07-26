export const fetchBooks = async (title, author, genre) => {
  const query = [
    title && `intitle:${title}`,
    author && `inauthor:${author}`,
    genre && genre
  ].filter(Boolean).join('+');

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
  );
  return res.json();
};
