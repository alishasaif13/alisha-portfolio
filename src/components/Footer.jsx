import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all shadow-md"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all shadow-md"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-indigo-400 font-medium">Alisha Saif</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
