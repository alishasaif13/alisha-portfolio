const Projects = () => {
  const projectData = [
    {
      title: "Smart Healthcare System (FYP)",
      desc: "Hospital management system including pharmacy, appointments, reports, and more.",
      img: "/assets/project1.png", // <- You will set your image path here
      link: "https://github.com/alishasaif13", // Replace with actual
    },
    {
      title: "Ecommerce Full-Stack (Web Application)",
      desc: "Built a full-stack ecommerce web app using the MERN stack with authentication & admin dashboard.",
      img: "/assets/project2.png",
      link: "https://github.com/alishasaif13/-ecommerce-fullstack-design",
    },
    {
      title: "Beauty Products E-Commerce UI",
      desc: "Designed a responsive beauty products e-commerce UI using HTML, CSS, JavaScript.",
      img: "/assets/project3.png",
      link: "https://github.com/alishasaif13",
    },
    {
      title: "Amazon Clone (Frontend Web Project)",
      desc: "Developed a static frontend clone of Amazon using HTML, CSS, JavaScript.",
      img: "/assets/project4.png",
      link: "https://github.com/alishasaif13",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="block mt-4 text-indigo-600 font-medium hover:underline"
                >
                  🔗 Click to continue
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
