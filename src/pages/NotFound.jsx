import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="pt-20 text-center">
    <h1 className="text-5xl font-bold text-red-500">404 - Page Not Found</h1>
    <p className="text-gray-600 mt-4">Oops! The page you are looking for doesn't exist.</p>
    <Link to="/" className="text-blue-500 mt-4 inline-block bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Go to Home</Link>
  </div>
);

export default NotFound;
