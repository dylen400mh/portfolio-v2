const Home = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-[#1a1a1a] text-white min-h-screen flex flex-col justify-center items-center p-8"
    >
      <h1 className="text-4xl font-extrabold mb-4">Hi, I'm Dylen Belanger</h1>
      <p className="text-lg mb-6 text-gray-300 max-w-xl text-center">
        3rd Software Engineering student at Western University.
      </p>
      <button
        onClick={() => handleScroll("about")}
        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-colors duration-300"
      >
        Get to know me!
      </button>
    </section>
  );
};

export default Home;
