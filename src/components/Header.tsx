import React, { useState } from "react";
import logo from "./../assets/LOGO.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white px-3 py-4 lg:px-20">
      <div className="max-w-7xl mx-auto  flex justify-between items-center">
        {/* Logo */}
        <div className="text-text-primary text-2xl font-bold">
          <img src={logo} className="max-h-12 rounded-lg" alt="Rani Khadam Logo" />
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links (hidden on mobile, visible on md+) */}
        <nav className="hidden md:flex space-x-8 ">
          <a
            href="#find-jobs"
            className="text-text-primary font-semibold hover:text-primary transition-colors"
          >
            Find Jobs
          </a>
          <a
            href="#companies"
            className="text-text-primary font-semibold hover:text-primary transition-colors"
          >
            Companies
          </a>
          <a
            href="#why-rani"
            className="text-text-primary font-semibold hover:text-primary transition-colors"
          >
            Why Rani Khadam?
          </a>
          <a
            href="#contact"
            className="text-text-primary font-semibold hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Join Us Button (hidden on mobile, visible on md+) */}
        <button className="hidden md:block px-4 py-2 bg-primary text-white rounded-[25px] hover:bg-light-blue transition-colors">
          Join Us
        </button>

        {/* Mobile Menu (visible when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#find-jobs"
                className="text-text-primary font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </a>
              <a
                href="#companies"
                className="text-text-primary font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </a>
              <a
                href="#why-rani"
                className="text-text-primary font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Rani Khadam?
              </a>
              <a
                href="#contact"
                className="text-text-primary font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-light-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;