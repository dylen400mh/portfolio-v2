const technologies = [
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  {
    icon: "devicon-typescript-original colored",
    label: "TypeScript",
  },
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-nodejs-plain colored", label: "Node.js" },
  { icon: "devicon-express-original colored", label: "Express.js" },
  { icon: "devicon-tailwindcss-plain colored", label: "Tailwind" },
  { icon: "devicon-postgresql-plain colored", label: "SQL" },
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-css3-plain colored", label: "CSS" },
  { icon: "devicon-html5-plain colored", label: "HTML" },
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: 'devicon-opencv-plain colored', label: 'OpenCV'},
  { icon: 'devicon-tensorflow-original colored', label: 'TensorFlow'},
  { icon: "devicon-csharp-plain colored", label: "C#" },
  { icon: "devicon-flask-original", label: "Flask" },
  { icon: "devicon-jest-plain colored", label: "Jest" },
  { icon: "devicon-npm-original-wordmark colored", label: "NPM" },
  { icon: "devicon-webpack-plain colored", label: "Webpack" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#1a1a1a] text-white min-h-screen p-8 flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        {/* Title and Paragraph */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
          <p className="text-lg mb-10 text-gray-300 leading-relaxed">
            I am Dylen, a dedicated software engineering student at Western
            University. Through my degree, I've built a strong foundation in
            many programming languages, technologies, and essential development
            methodologies. In my free time, I've engaged in personal and
            open-source projects to expand my skills and collaborate with peers,
            emphasizing the importance of communication and teamwork in software
            development. I also balance my pursuits with Varsity Track and
            Field. I'm eager to contribute to the tech industry's growth and
            innovation through internships and co-op positions, aiming to make a
            positive impact in various communities.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {technologies.map((tech, index) => (
            <div className="flex flex-col items-center" key={index}>
              <i className={`${tech.icon} text-4xl mb-2`}></i>
              <span className="text-gray-300">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
