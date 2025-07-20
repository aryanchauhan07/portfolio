import React, { useState } from "react";

const projects = [
  {
    title: "Assistly",
    stack: ["Figma", "Adobe Illustrator", "Notion", "Color Hunt"],
    category: "UI/UX",
    image: "./projects/Assistly.png",
    description: [
      "Assistly is an emotionally intelligent AI assistant designed to support users not just functionally, but emotionally.",
      "It adapts to your mood, routines, and environment — offering calm, personalized experiences that evolve with you.",
    ],
    caseStudy: "#", // optional: link to Notion or PDF
    viewLink:
      "https://www.figma.com/proto/idQQi1QtNP7wMymX1uVmMS/Assistly-Aryan?page-id=0%3A1&node-id=1-302&p=f&viewport=66%2C-181%2C0.1&t=2vF28l0q9IEax0OA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A261&show-proto-sidebar=1",
  },

  {
    title: "Caro",
    stack: ["Figma", "Notion", "Adobe Illustrator", "Color Hunt"],
    category: "UI/UX",
    image: "/projects/caro.png",
    description: [
      "This was a rebranding of ‘Kubo Care’, a healthcare startup offering privacy-first monitoring for seniors using radar-based tech.",
      "The challenge was to humanize the brand — turning a clinical product into a trusted companion by balancing empathy with innovation.",
    ],

    caseStudy: "#",
    viewLink: "https://www.behance.net/gallery/229636295/caro/modules/1315761099", // update if needed
  },

  {
  title: "Croaks",
  stack: ["Figma", "Notion", "Adobe Illustrator", "Color Hunt"],
  category: "UI/UX",
  image: "/projects/croak.png",
  description: [
    "Croaks is a smart, intuitive weather app built for both farmers and everyday users, blending clarity with purpose.",
    "Designed to decode real-time forecasts into visuals and tips, it features Root Mode for growers and Sky Mode for goers — making weather personal, practical, and poetic.",
  ],
  caseStudy: "https://www.behance.net/gallery/229633181/croak/modules/1315742579",
  viewLink: "https://www.figma.com/proto/5zi5gNdYHAkj70ap3pbeP5/Croak?page-id=1%3A2&node-id=124-6949&viewport=492%2C155%2C0.05&t=aQScXGCpf3aIRTfJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A6949", // update if needed
},


  {
    title: "Ride",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Illustrator", "GSAP"],
    category: "Full Stack",
    image: "/projects/ride.png",
    description: [
      "Ride is a cab booking platform built to deliver comfort, reliability, and ease at every step.",
      "From smooth pre-booking to real-time fare insights, it’s designed for users who value seamless, stress-free travel.",
      "Effortless travel, every time.",
    ],
    underConstruction: true,

    caseStudy: "#",
    viewLink: "", // placeholder
  },

  {
    title: "Crispkart",
    stack: ["React", "TailwindCSS", "Illustrator", "GSAP"],
    category: "Frontend",
    image: "/projects/crispkart.png",
    description: [
      "Crispkart is a health-focused food ordering website designed for simplicity and wellness.",
      "With a clean interface, smooth transitions, and intuitive flow, it makes healthy eating just a tap away.",
      "Tap. Eat. Repeat.",
    ],
    underConstruction: true,
    caseStudy: "#",
    viewLink: "", // placeholder
  },
];

const categories = ["All Projects", "Full Stack", "Frontend", "UI/UX"];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [activePopup, setActivePopup] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-[#0f0f11] text-white"
      id="projects"
    >
      <h2 className="text-4xl sm:text-5xl  mb-8 font-pricedown">
        Projects
      </h2>

      <div className="flex flex-wrap gap-3 mb-10 font-sans font-bold">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-purple-600 text-white border-purple-500"
                : "bg-transparent text-gray-300 border-gray-600"
            } hover:bg-purple-800 transition text-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-10 font-sans relative z-0">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-6 relative"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-yellow-400">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <span className="mt-2 inline-block text-xs px-3 py-1 border border-purple-500 text-purple-400 rounded-full font-semibold tracking-wide">
                {project.category}
              </span>
              {project.underConstruction && (
                <span className="ml-3 text-xs text-gray-400 font-medium">
                  This project is under construction
                </span>
              )}
            </div>

            <button
              onClick={() => setActivePopup(project)}
              className="mt-4 sm:mt-0 text-sm text-white flex items-center gap-2 group hover:underline"
            >
              Read More{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            {hoveredIndex === index && (
              <img
                src={project.image}
                alt="preview"
                style={{ left: cursorPos.x + 20, top: cursorPos.y - 20 }}
                className="fixed z-50 w-40 h-24 object-cover rounded-md shadow-lg border border-white/10 pointer-events-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {activePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[999] flex items-center justify-center p-6 font-sans">
          <div className="bg-[#1a1a1d] rounded-xl max-w-xl w-full p-6 text-white relative">
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✕
            </button>
            <img
              src={activePopup.image}
              className="w-full h-52 object-cover rounded-lg mb-4"
              alt={activePopup.title}
            />
            <h3 className="text-2xl font-semibold mb-2">{activePopup.title}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {activePopup.description}
            </p>
            <div className="flex gap-4 flex-wrap">
              {activePopup.caseStudy && activePopup.caseStudy !== "#" && (
                <a
                  href={activePopup.caseStudy}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Case Study
                </a>
              )}

             {!activePopup.viewLink ? (
  <button
    onClick={() =>
      alert("🚧 This project is currently under construction. Come back soon!")
    }
    className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black"
  >
    View Project
  </button>
) : (
  <a
    href={activePopup.viewLink}
    className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
)}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
