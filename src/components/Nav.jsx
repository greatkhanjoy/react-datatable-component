import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between p-6">
          <div>
            <Link to="/" className="text-white text-2xl font-bold">
              Greatkhanjoy
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-white text-xl font-medium">
              Home
            </Link>
            <Link to="/table" className="text-white text-xl font-medium">
              Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
