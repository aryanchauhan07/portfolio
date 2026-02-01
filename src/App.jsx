import FloatingNav from "./components/FloatingNav";
import PageGradientWrapper from "./components/PageGradientWrapper";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Instagram from "./sections/Instagram";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="w-full">
    

      {/* HERO stays outside gradient */}
      <div id="hero">
        <Hero />
      </div>
      <FloatingNav />
      <PageGradientWrapper>
        <About />
        <Projects />
        <Experiences />
        <Instagram />
        <Contact />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </PageGradientWrapper>
    </div>
  );
};

export default App;
