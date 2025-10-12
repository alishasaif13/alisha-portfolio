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
    <section id="education" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {edu.degree}
              </h3>
              <p className="text-gray-700 mt-2 font-medium">{edu.institute}</p>
              <p className="text-gray-500 mt-1 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
