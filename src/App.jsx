import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Main content remains the same */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple & Secure Authentication
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A clean, professional authentication system built with React and
            modern web technologies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Signup Card */}
          <div
            className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => navigate("/Signup")}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-pink-50 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Create Account
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  Sign up to get started with our platform. Simple registration
                  process.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-pink-700 text-sm">
                  Secure data storage with MongoDB and encrypted passwords.
                </p>
              </div>
            </div>

            <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition duration-300 font-medium cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Login Card */}
          <div
            className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Existing User
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  Welcome back! Sign in to access your account and dashboard.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  Secure login with encrypted credentials and session
                  management.
                </p>
              </div>
            </div>

            <button className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition duration-300 font-medium cursor-pointer">
              Sign In
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-4xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">
                Encrypted password storage and secure sessions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600 text-sm">
                Quick authentication with optimized performance
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simple</h3>
              <p className="text-gray-600 text-sm">
                Clean and intuitive user interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
