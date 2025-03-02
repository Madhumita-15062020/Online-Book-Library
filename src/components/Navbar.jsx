import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className=" bg-purple-500 text-white p-4 fixed w-full top-0 shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">📚 Online Library</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-black hover:bg-purple-300 p-2 rounded-lg transition-all duration-700">Home</Link>
        <Link to="/books/fiction" className="hover:text-black hover:bg-purple-300 p-2 rounded-lg transition-all duration-700">Browse Books</Link>
        <Link to="/add-book" className="hover:text-black hover:bg-purple-300 p-2 rounded-lg transition-all duration-700">Add Book</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
