import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10 m-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Online Library</h1>
      <p className="text-lg mb-6">Explore different book categories</p>
      <div className="flex justify-center gap-4">
        <Link to="/books/fiction" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-300 hover:text-black transition-all duration-600">Fiction</Link>
        <Link to="/books/non-fiction" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-300 hover:text-black transition-all duration-600">Non-Fiction</Link>
        <Link to="/books/sci-fi" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-300 hover:text-black transition-all duration-600">Sci-Fi</Link>
      </div>
    </div>
  );
};

export default Home;
