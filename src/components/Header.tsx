import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const sections = ["Home", "About", "Projects", "Contact"];
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, handleLogout } = useAuth();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - 500,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { sectionId } });
    } else {
      handleScroll(sectionId);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
          <Link
            to="/"
            className="hover:bg-gray-700 px-3 py-2 rounded transition-colors duration-300"
          >
            Dylen Belanger
          </Link>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative">
            {/* Animated Hamburger Menu */}
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transform transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section.toLowerCase())}
              className="hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300"
            >
              {section}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1BfkkxCWK0AzbCUvmVUR03EX8twmsXF8R/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300"
          >
            Resume
          </a>
          <Link
            to="/blog"
            className="hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300"
          >
            Blog
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogoutClick}
              className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu with Dropdown Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#1a1a1a] shadow-lg">
          <ul className="flex flex-col items-center space-y-4 p-4 text-lg">
            {sections.map((section) => (
              <li key={section} className="w-full">
                <button
                  onClick={() => {
                    handleNavigation(section.toLowerCase());
                    toggleMenu();
                  }}
                  className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center"
                >
                  {section}
                </button>
              </li>
            ))}
            <li className="w-full">
              <button className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center">
                <a
                  href="https://drive.google.com/file/d/1BfkkxCWK0AzbCUvmVUR03EX8twmsXF8R/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </button>
            </li>
            <li className="w-full">
              <button className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center">
                <Link to="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </button>
            </li>
            <li className="w-full">
              {isAuthenticated ? (
                <button
                  onClick={handleLogoutClick}
                  className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center"
                >
                  Logout
                </button>
              ) : (
                <button className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center">
                  <Link
                    to="/login"
                    className="w-full hover:bg-gray-600 px-3 py-2 rounded transition-colors duration-300 text-center"
                  >
                    Login
                  </Link>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
