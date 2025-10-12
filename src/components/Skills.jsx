const Skills = () => {
  const technicalSkills = [
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  const tools = [
    "VMware",
    "VS Code",
    "XAMPP",
    "Kali Linux",
    "Cisco Packet Tracer",
    "MATLAB",
    "Cursor AI"
  ];

  const softSkills = ["Problem Solving", "Teamwork", "Time Management"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-indigo-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Skills
        </h2>

        {/* Technical Skills */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {technicalSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white border border-indigo-200 text-gray-700 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white border border-indigo-200 text-gray-700 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white border border-indigo-200 text-gray-700 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
