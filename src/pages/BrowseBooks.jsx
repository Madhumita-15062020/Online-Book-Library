import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectBooksByCategory } from "../redux/bookSlice";
import { useState } from "react";

const categories = ["fiction", "non-fiction", "sci-fi"];

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => selectBooksByCategory(state, category));
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter books based on the search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Browse Books</h1>

      {/* 🔹 Category Buttons */}
      <div className="mb-6 flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/books/${cat}`)}
            className={`px-4 py-2 rounded-lg transition ${
              category === cat 
                ? "bg-purple-300 text-black font-semibold shadow-md"  // Active button
                : "bg-purple-500 text-white hover:bg-purple-300 hover:text-black"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full max-w-lg border p-2 mb-6 rounded-lg bg-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 📚 Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold text-gray-900">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <div className="mt-2">
                <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
