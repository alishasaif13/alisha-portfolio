import { motion } from "framer-motion";

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
    <section id="skills" className="py-20 bg-[#0A0F1F] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          Skills
        </h2>

        {/* Technical Skills */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#A855F7] mb-4"
        >
          Technical Skills
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {technicalSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-5 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full shadow-md 
              hover:border-[#14B8A6] hover:shadow-[0_0_15px_#14B8A6] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Tools */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#A855F7] mb-4"
        >
          Tools & Technologies
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tools.map((tool, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-5 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full shadow-md 
              hover:border-[#A855F7] hover:shadow-[0_0_15px_#A855F7] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {tool}
            </motion.span>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#A855F7] mb-4"
        >
          Soft Skills
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-5 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full shadow-md 
              hover:border-[#14B8A6] hover:shadow-[0_0_15px_#14B8A6] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
