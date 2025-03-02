import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", category: "fiction", description: "", rating: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: Date.now().toString() }));
    navigate(`/books/${book.category}`);
  };

  return (
    <div className="pt-24 p-10 min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Add a New Book</h2>
        <input className="w-full border p-2 mb-4 rounded-lg" name="title" placeholder="Title" onChange={handleChange} required />
        <input className="w-full border p-2 mb-4 rounded-lg" name="author" placeholder="Author" onChange={handleChange} required />
        <select className="w-full border p-2 mb-4 rounded-lg" name="category" onChange={handleChange} required>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <textarea className="w-full border p-2 mb-4 rounded-lg" name="description" placeholder="Description" onChange={handleChange} required />
        <input className="w-full border p-2 mb-4 rounded-lg" name="rating" placeholder="Rating (1-5)" type="number" onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
