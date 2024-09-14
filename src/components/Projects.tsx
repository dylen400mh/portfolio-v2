import React from "react";

// Importing the images
import myMindfulM8Img from "../images/mymindfulm8.jpg";
import yourEssentialsImg from "../images/youressentials.png";
import memoryCardImg from "../images/memory-card.jpg";
import battleshipImg from "../images/battleship.png";
import todoListImg from "../images/todo-list.png";
import weatherAppImg from "../images/weather-app.png";
import blogImg from "../images/blog.png";

// Array of project objects
const projects = [
  {
    title: "Blog Website/API",
    technologies:
      "Node.js, Express.js, PostgreSQL(Prisma), React, Typescript, Tailwind",
    image: blogImg,
    alt: "Image of blog admin website",
    codeLink: "https://github.com/dylen400mh/blog-api",
    demoLink: "https://www.youtube.com/watch?v=4OSidLXTCLw",
    description:
      "A full-stack blog application that provides a RESTful API for managing posts and comments, with a frontend for blog management and JWT-based route protection.",
  },
  {
    title: "MyMindfulM8",
    technologies: "React, Python, Flask, SQL",
    image: myMindfulM8Img,
    alt: "Image of MyMindfulM8 home page",
    codeLink: "https://github.com/dylen400mh/mymindfulm8",
    demoLink: "https://www.youtube.com/watch?v=gsYwpJ4L8Eg",
    description:
      "Created at Hack Western 10, a hackathon hosted at Western University, MyMindfulM8 is a health-and-wellness web application that aims to provide users with insights and evidence-based tools to navigate and improve their overall mental, physical, and social health and well-being.",
  },
  {
    title: "YourEssentials - Ecommerce Shopping Cart",
    technologies: "React, Tailwind, React Testing Library",
    image: yourEssentialsImg,
    alt: "Image of YourEssentials home page",
    codeLink: "https://github.com/dylen400mh/youressentials",
    demoLink: "https://dylen400mh-youressentials.netlify.app/",
    description:
      "YourEssentials is an Ecommerce website created with React that mimics the experience of online shopping. Users have the ability to add items to their cart, modify their items, and navigate to the checkout page when ready.",
  },
  {
    title: "Memory Card Game",
    technologies: "React, JavaScript, Pokemon API, Netlify",
    image: memoryCardImg,
    alt: "Image of memory card game",
    codeLink: "https://github.com/dylen400mh/memory-card",
    demoLink: "https://dylen400mh-memory-card.netlify.app/",
    description:
      "This is a dynamic React-based memory card game, leveraging state management and API integration. This project was created to practice React skills, including utilizing hooks and asynchronous functions for smooth user interactions and data retrieval.",
  },
  {
    title: "Battleship",
    technologies: "JavaScript/HTML/CSS, Jest, Webpack, Git",
    image: battleshipImg,
    alt: "Image of my Battleship game",
    codeLink: "https://github.com/dylen400mh/battleship",
    demoLink: "https://dylen400mh.github.io/battleship/",
    description:
      "Developed using JavaScript and tested with Jest. This project is a digital implementation of the classic game 'Battleship,' showcasing skills in Test Driven Development (TDD), modular code organization, effective DOM manipulation, and strategic game logic.",
  },
  {
    title: "To-Do List",
    technologies: "JavaScript/HTML/CSS, Webpack, Git",
    image: todoListImg,
    alt: "Image of my To-do List",
    codeLink: "https://github.com/dylen400mh/todo-list",
    demoLink: "https://dylen400mh.github.io/todo-list/",
    description:
      "Developed using HTML, CSS, and JavaScript. This project demonstrates skills in creating dynamic todo-items, organizing code using modules, handling user interactions, and adding persistence using the Web Storage API.",
  },
  {
    title: "Weather Forecast App",
    technologies: "JavaScript/HTML/CSS, Webpack, Git",
    image: weatherAppImg,
    alt: "Image of my Weather App",
    codeLink: "https://github.com/dylen400mh/weather-app",
    demoLink: "https://dylen400mh.github.io/weather-app/",
    description:
      "Created using HTML, CSS and JavaScript. This is a Weather Forecast site that allows users to search for a specific location and view the weather information. The weather data is fetched using WeatherAPI. This project demonstrates skills in working with APIs, handling user input, processing JSON data, and dynamically updating the webpage.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1a1a1a] text-white py-12 px-4">
      <h2 className="text-4xl font-extrabold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <span className="text-gray-400">{project.technologies}</span>
            </div>
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 md:h-64 lg:h-72 xl:h-80 object-contain rounded-md"
              />
            </div>
            <nav className="flex space-x-4 mb-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
              >
                Code
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                {project.demoLink.includes("youtube")
                  ? "Video Demo"
                  : "Live Demo"}
              </a>
            </nav>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
