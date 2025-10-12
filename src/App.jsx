import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="px-4  sm:mx-w-xl mx:auto x:auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl" >
      <Navbar/>
      <About />
      <Education />
      <Skills />
      <Projects/>
      <Experience />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
