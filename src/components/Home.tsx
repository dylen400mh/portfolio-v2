import portrait from "../images/portrait.jpg";

const Home = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-[#1a1a1a] text-white min-h-screen flex justify-center items-center p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-4xl font-extrabold mb-4">
            Hi, I'm Dylen Belanger
          </h1>
          <p className="text-lg mb-6 text-gray-300 max-w-xl text-center lg:text-left">
            3rd Software Engineering student at Western University.
          </p>
          <button
            onClick={() => handleScroll("about")}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-colors duration-300"
          >
            Get to know me!
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={portrait}
            alt="Dylen Belanger Portrait"
            className="w-64 h-64 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
