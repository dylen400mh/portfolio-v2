import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const { validateToken } = useAuth();
  useEffect(() => {
    validateToken();
    if (location.state && location.state.sectionId) {
      const sectionId = location.state.sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - 500,
          behavior: "smooth",
        });
      }
    }
  }, [location, validateToken]);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
