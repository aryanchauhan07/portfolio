// /sections/StickyNav.jsx

import React, { useEffect, useState } from "react";

const StickyNav = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("");

  const sections = [ "about", "projects", "experience", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // Show nav after about section starts
      const about = document.getElementById("about");
      if (about && scrollY > about.offsetTop - 200) {
        setShow(true);
      } else {
        setShow(false);
      }

      // Highlight active section
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 bg-black/80 p-4 rounded-xl shadow-lg">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`capitalize text-sm md:text-base text-white transition duration-300 ${
            active === id ? "text-purple-400 font-bold" : "hover:text-purple-400"
          }`}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

export default StickyNav;
