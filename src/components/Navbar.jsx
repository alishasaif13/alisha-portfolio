import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold tracking-wide text-indigo-600">
          Alisha <span className="text-gray-800">Saif</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg px-6 pb-4">
          {navLinks.map((nav, index) => (
            <li key={index} className="py-2">
              <a
                href={nav.link}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
              <li><a href="#contact">Contact</a></li>

            </li>
            
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
