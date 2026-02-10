import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Crisp AI",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Google Gemini API",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    image: "/projects/crisp.png",
    description:
      "An AI-powered fitness and nutrition platform that analyzes meals, tracks daily health data, and provides personalized insights using Generative AI. Features secure authentication, real-time chat with AI, and an interactive dashboard for monitoring nutrition progress.",
    viewLink: "https://crispcart.vercel.app/",
  },
  {
    title: "AirPointer",
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Gesture Recognition",
    ],
    category: "Computer Vision",
    image: "/projects/AirPointer.png",
    description:
      "A real-time gesture controlled mouse and air keyboard system that lets users move the cursor and perform clicks using hand movements via webcam. Built with MediaPipe and OpenCV for touchless human computer interaction.",
    viewLink: "https://github.com/aryanchauhan07/AirPointer",
  },

  {
    title: "Assistly",
    stack: ["Figma", "Adobe Illustrator", "Notion"],
    category: "UI/UX",
    image: "./projects/Assistly.png",
    description:
      "A personalized AI assistant concept designed to adapt to users’ moods, routines, and environments. Built using user-centered design principles with high-fidelity prototypes, emotion-driven visuals, and usability testing to improve task success and user engagement.",
    viewLink:
      "https://www.figma.com/proto/idQQi1QtNP7wMymX1uVmMS/Assistly-Aryan",
  },
  {
    title: "Caro",
    stack: ["Figma", "Notion", "Adobe Illustrator"],
    category: "UI/UX",
    image: "/projects/caro.png",
    description:
      "A healthcare startup rebranding project focused on humanizing senior care technology. The redesign emphasizes clarity, trust, and emotional connection through a refined visual identity, structured user flows, and an accessible interface system.",
    viewLink:
      "https://www.behance.net/gallery/229636295/caro/modules/1315761099",
  },
  {
    title: "Croaks",
    stack: ["Figma", "Notion", "Adobe Illustrator"],
    category: "UI/UX",
    image: "/projects/croak.png",
    description:
      "An intuitive weather application designed for both farmers and urban users, translating complex forecasts into actionable insights. Features dual navigation modes, interactive prototypes, and custom visual elements to improve clarity and decision-making.",
    viewLink:
      "https://www.figma.com/proto/5zi5gNdYHAkj70ap3pbeP5/Croak?page-id=1%3A2&node-id=124-6949&viewport=534%2C376%2C0.04&t=fXZbLJBwRrZef1sp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A6949",
  },

  {
    title: "The Ordinary — Rebrand",
    stack: [
      "Figma",
      "Adobe Illustrator",
      "Brand Strategy",
      "Design Systems",
      "Prototyping",
    ],
    category: "UI/UX",
    image: "/projects/ordinary.png",
    description:
      "A complete brand and digital experience redesign for The Ordinary as part of a rebranding competition. The project reimagines visual identity, packaging, and digital interfaces with a focus on clarity, consistency, and a more emotionally engaging user experience while preserving the brand’s minimalist essence.",
    viewLink:
      "https://www.behance.net/gallery/243309619/The-Ordinary-A-Brand-Rebranding-Concept/modules/1403778615",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "UI/UX", "Full Stack", "Computer Vision"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    gsap.fromTo(
      ".project-row",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 75%",
        },
      },
    );
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-32 px-4 md:px-6 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto space-y-12 md:space-y-20">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold">
            Selected Work
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            A curated collection of projects blending design and development.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 md:px-5 py-2 rounded-full border transition text-sm md:text-base"
              style={{
                borderColor: "#C17AFE",
                background: filter === f ? "#C17AFE" : "transparent",
                color: filter === f ? "#0f0f12" : "#C17AFE",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-16 md:space-y-28">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`project-row grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {project.viewLink && (
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    <span className="px-6 py-3 rounded-full bg-[#C17AFE] text-[#0f0f12] font-semibold">
                      View Project
                    </span>
                  </a>
                )}
              </div>

              {/* TEXT */}
              <div className="space-y-4 md:space-y-5">
                <span className="text-sm text-[#C17AFE] uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-white/75 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 md:px-4 py-1 rounded-full border text-xs md:text-sm"
                      style={{
                        borderColor: "#C17AFE",
                        color: "#C17AFE",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
