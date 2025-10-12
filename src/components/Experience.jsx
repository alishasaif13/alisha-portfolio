const Experience = () => {
  const expData = [
    {
      role: "MERN Stack Developer (Intern)",
      company: "XYZ Software House",
      duration: "Jan 2024 - Present",
      desc: "Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      role: "Frontend Developer (Remote)",
      company: "Freelance / Upwork",
      duration: "2023 - Present",
      desc: "Designed and developed responsive UI for small businesses and startup clients.",
    },
    {
      role: "Web Development Trainee",
      company: "ABC Tech Institute",
      duration: "2022 - 2023",
      desc: "Learned core frontend technologies and built multiple responsive landing pages.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-500 pl-6 space-y-10">
          {expData.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all"
            >
              <div className="w-4 h-4 bg-indigo-500 rounded-full absolute -left-[9px] mt-2.5"></div>

              <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-indigo-600 font-medium">{exp.company}</p>
              <span className="text-gray-500 text-sm">{exp.duration}</span>
              <p className="text-gray-600 mt-3">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
