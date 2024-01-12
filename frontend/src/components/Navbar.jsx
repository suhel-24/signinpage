
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4 flex justify-between items-center overflow-hidden overflow-y-hidden">
        <Link to="/" className="text-white">Home</Link>
        <div className="flex space-x-4">
        <Link to="/signup" className="text-white">signup</Link>
        <Link to="/login" className="text-white">login</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  