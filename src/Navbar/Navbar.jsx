import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm py-4 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">AuthApp</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a
            onClick={() => {
              navigate("/features");
            }}
            className="text-gray-600 hover:text-pink-500 transition duration-300 text-sm cursor-pointer"
          >
            Features
          </a>
          <a
            onClick={() => {
              navigate("/about");
            }}
            className="text-gray-600 hover:text-pink-500 transition duration-300 text-sm cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/contact");
            }}
            className="text-gray-600 hover:text-pink-500 transition duration-300 text-sm cursor-pointer"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-3 items-center">
          {/* GitHub Button */}
          <a
            href="https://github.com/intruderr_g"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2 text-sm cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Code</span>
          </a>

          <button
            onClick={() => navigate("/Login")}
            className="bg-transparent border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:border-pink-400 hover:text-pink-500 transition duration-300 text-sm cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Signup")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-300 text-sm cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
