import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const sectionRef = useRef(null);

  const experiences = [
  {
  role: "Frontend Developer & UI/UX Designer Intern",
  company: "Cinovex",
  period: "May 2025 - july 2025",
  description: [
    "Designed the UI/UX for a legal-tech website in collaboration with MNLU law students.",
    "Built the frontend interface with a focus on clarity, accessibility, and structured legal content.",
  ],
},


   {
  role: "Winner — ML/AI Hackathon",
  company: "StartQuest, IIT Kharagpur",
  period: "24 Jan 2026",
  description: [
    "Won first place at a national-level ML/AI hackathon with an AI-driven solution.",
    "Built and presented a user-focused ML product under strict time constraints.",
  ],
},



  ];

  useEffect(() => {
    gsap.fromTo(
      ".exp-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-20 md:py-36 px-4 md:px-12 text-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto space-y-14 md:space-y-24">
        {/* header */}
        <div className="text-center">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-semibold text-white">
            Experience
          </h2>
          <p className="text-white/60">Professional journey</p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-card p-6 md:p-10 rounded-2xl md:rounded-3xl bg-black/40 border border-white/10 backdrop-blur"
            >
              <span className="text-xs text-purple-400">{exp.period}</span>
              <h3 className="text-xl md:text-2xl mt-3">{exp.role}</h3>
              <p className="text-purple-400">{exp.company}</p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((d, idx) => (
                  <li key={idx} className="text-white/70 text-sm md:text-base">
                    — {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
