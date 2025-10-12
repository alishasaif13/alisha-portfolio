import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 flex justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-600 mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:alishasaif132@gmail.com"
            className="p-4 bg-white rounded-full shadow-md border hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            className="p-4 bg-white rounded-full shadow-md border hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            className="p-4 bg-white rounded-full shadow-md border hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="text-gray-500 mt-8">
          📩 <span className="text-indigo-600 font-medium">alishasaif132@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
