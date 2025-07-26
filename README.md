---

````markdown
# 📚 Book Explorer

Book Explorer is a modern React-based web application that lets users search for books using the Google Books API, view detailed information, and manage a list of personal favorites. It is built with clean architecture, responsive design, and performance in mind.

---

## 🔍 Features

- **Search books** by title, author, or genre/keyword
- **Responsive UI** with a clean card grid layout
- **Detailed book view** using a dynamic route
- **Add or remove favorites** using global context
- **Persistent favorites** via browser storage (optional enhancement)
- **Client-side routing** with React Router
- **Code-splitting** for performance
- **Accessible and mobile-friendly** design

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (>= 14)
- npm or yarn

### 📦 Installation

```bash
git clone https://github.com/your-username/book-explorer.git
cd book-explorer
npm install
````

### ▶️ Run Locally

```bash
npm run dev
# or with Create React App
npm start
```

### 🧪 Run Tests (if implemented)

```bash
npm test
```

---

## 🧭 Project Structure

```
src/
├── components/
│   ├── BookCard/
│   ├── SearchForm/
│   ├── NavBar/
├── pages/
│   ├── Home.jsx
│   ├── BookPage.jsx
│   ├── FavoritesPage.jsx
├── context/
│   └── FavoritesContext.js
├── App.jsx
├── main.jsx
```

---

## 🧱 Technical Details

### 🛣 Routing

* `"/"` — Home/Search Page
* `"/book/:id"` — Book Details Page (lazy loaded)
* `"/favorites"` — Favorite Books Page

Implemented using **React Router v6** with `<Routes>`, `<Link>`, and `<useParams>`.

### 📄 Form Handling

* Controlled form with three fields: title, author, genre
* Validation ensures at least one field is filled before search
* Search button disabled with helpful error message if invalid

### 🌐 API Integration

* Google Books API:

  * Base URL: `https://www.googleapis.com/books/v1/volumes?q=`
  * Custom query construction using `intitle:`, `inauthor:`, and free text
  * Example query: `?q=intitle:Harry+inauthor:Rowling+fantasy`

### 🧠 State Management

* Implemented using React Context API via `FavoritesContext`
* Functions: `addFavorite`, `removeFavorite`, and `favorites` state
* Efficient lookup using `.some()` and `.filter()` inside handler

---

## ⚙️ Performance Optimizations

* 🧠 `useMemo` for memoizing expensive derived state (e.g. filtered favorites)
* ⚛️ `React.memo()` for memoizing `BookCard` to prevent unnecessary renders
* ⏳ Lazy loading of BookDetails with `React.lazy` and `Suspense`
* 📦 Code-splitting via dynamic import for better initial load time
* ♻️ Clean component structure with reusable logic

---

## 🎯 Trade-offs & Design Decisions

* **No backend or database**: Keeps the app lightweight and focused on UI.
* **Google Books API only**: Limits book data accuracy but simplifies scope.
* **Context over Redux**: For a small app, Context provides sufficient global state without boilerplate.
* **Single-page UX**: No modals to keep navigation clean and accessible via URL sharing.
* **No authentication**: Keeps the app open for anyone to explore books freely.

---

## 📌 Future Improvements

* Add **pagination** for large result sets
* Persist favorites using **localStorage**
* Implement **unit & integration tests** with React Testing Library
* Add **filters or sorting** options (e.g., by published year, rating)
* Add **offline support** and PWA capabilities

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* Google Books API
* React Router
* React Icons
* [StoryMirror](https://storymirror.com) — Sample book inspiration

```


