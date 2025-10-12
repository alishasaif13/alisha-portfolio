const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6 pt-24"
    >
      <div className="max-w-4xl text-center">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I'm <span className="text-indigo-600">Alisha Saif</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-700">
          MERN Stack Developer & Web Developer
        </h2>

        {/* Objective / Short Intro */}
        <p className="mt-6 text-gray-600 leading-relaxed text-lg">
          Recent BSIT graduate with hands-on experience in building scalable web
          applications using the MERN stack. Passionate about creating elegant UI,
          writing clean code, and delivering high-performing digital solutions.
        </p>

        {/* Buttons (optional: later add CV Download / Hire Me) */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
