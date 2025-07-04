import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import StickyNav from "./sections/StickyNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const App = () => {

// scroll handler for StickyHeader
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="container mx-auto max-w-7xl">
      <Hero />
      <StickyNav />
      <About />
      <Projects/>
      <Experiences/>
      <Contact/>
      <ToastContainer position="bottom-right" autoClose={3000} />
  
      
    </div>
  );
};

export default App;
