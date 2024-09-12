import resumeIcon from "../icons/icons8-doc.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6">
      <div className="container mx-auto text-center">
        <nav className="flex justify-center space-x-8">
          <a
            href="https://github.com/dylen400mh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <i className="devicon-github-original text-3xl"></i>
          </a>
          <a
            href="https://ca.linkedin.com/in/dylen-belanger-9a0942265"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <i className="devicon-linkedin-plain text-3xl"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1BfkkxCWK0AzbCUvmVUR03EX8twmsXF8R/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={resumeIcon} alt="Resume" className="w-8 h-8" />
          </a>
        </nav>
        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Dylen Belanger. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
