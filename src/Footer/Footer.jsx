import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="text-lg font-semibold text-white">AuthApp</span>
            </div>
            <p className="text-gray-400 text-sm">
              A professional authentication system demonstration.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">PROJECT</h4>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => {
                    navigate("/features");
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 text-sm cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 text-sm cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="text-gray-400 hover:text-white transition duration-300 text-sm cursor-pointer"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              TECH STACK
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">CONTACT</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to discuss your next project?
            </p>
            <a
              href="mailto:your.email@example.com"
              className="text-pink-400 hover:text-pink-300 text-sm cursor-pointer"
            >
              gevtripathi@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">Built for learning purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
