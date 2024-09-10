import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-black sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
          <Link to="/" className="hover:bg-gray-200 px-3 py-2 rounded">
            Dylen Belanger
          </Link>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative">
            {/* Animated Hamburger Menu */}
            <div
              className={`w-6 h-0.5 bg-black mb-1.5 transform transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <button
            onClick={() => handleScroll("home")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
          >
            Contact
          </button>
          <Link
            to="/blog"
            className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
          >
            Blog
          </Link>
        </nav>
      </div>

      {/* Mobile Menu with Dropdown Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 p-4 text-lg">
            <li>
              <button
                onClick={() => {
                  handleScroll("home");
                  toggleMenu();
                }}
                className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  toggleMenu();
                }}
                className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("projects");
                  toggleMenu();
                }}
                className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("contact");
                  toggleMenu();
                }}
                className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
              >
                Contact
              </button>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:bg-gray-200 px-3 py-2 rounded transition-colors duration-300"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
