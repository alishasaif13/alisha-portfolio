import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "BS in Information Technology",
      institute: "University of Punjab, Gujranwala Campus",
      year: "2021 – 2025",
    },
    {
      degree: "FSc. Pre-Engineering",
      institute: "Aspire Group of Colleges, Gujranwala",
      year: "2019 – 2021",
    },
    {
      degree: "Matriculation (Computer Science)",
      institute: "Government Girls High School, Gujranwala",
      year: "2017 – 2019",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#0A0F1F] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-6 rounded-xl shadow-xl border border-[#1F2937] hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#A855F7]">
                {edu.degree}
              </h3>
              <p className="text-gray-300 mt-2 font-medium">{edu.institute}</p>
              <p className="text-gray-500 mt-1 text-sm">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
