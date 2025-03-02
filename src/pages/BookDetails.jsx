import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.items.find(b => b.id === id));

  if (!book) return <h2 className="text-center text-red-500">Book not found</h2>;

  return (
    <div className="pt-24 p-10 text-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
        <p className="text-gray-700 text-lg mt-2">by {book.author}</p>
        <p className="mt-4 text-gray-600">{book.description}</p>
        <p className="mt-2 font-semibold text-yellow-500 text-xl">⭐ {book.rating} / 5</p>
        <div className="mt-6">
          <Link to={`/books/${book.category}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
