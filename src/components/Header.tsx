import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById("sectionId");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Dylen Belanger</div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:text-gray-400"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-gray-400"
          >
            Contact
          </button>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 p-4 bg-gray-800">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:text-gray-400"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-gray-400"
          >
            Contact
          </button>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
