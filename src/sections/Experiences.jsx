import React from "react";

export default function WorkExperience() {
 const experiences = [
  {
    period: "2023–Present",
    role: "UI/UX & Branding Designer",
    project: "Competitive Design Projects",
    bullets: [
      " Secured 2nd Runner-Up at IIT Roorkee's Brandstorm for a rebranding challenge.",
      " Participated in IIT Roorkee’s ZENIGMA UI/UX competition, focusing on design thinking & emotional UX.",
      " Won 1st place in a college-level rebranding contest by redesigning Zepto’s visual identity.",
      " Developed strong visual storytelling skills by balancing user empathy with modern aesthetics.",
    ],
  },
];


  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-[#0f0f11] via-[#0f0f11] to-[#0f0f11] text-white font-sans" id="experience">
      <h1 className="text-4xl sm:text-5xl  font-[pricedown] mb-16 text-left">
        MY EXPERIENCE
      </h1>

      <div className="space-y-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-transparent hidden sm:block"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 sm:pl-20">
            <div className="absolute left-2 sm:left-4 top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition duration-300">
              <div className="flex items-center gap-4 mb-2">
                <i className="ri-briefcase-4-fill text-purple-400 text-xl" />
                <h3 className="text-xl font-bold">{exp.role}</h3>
              </div>
              <p className="text-sm text-purple-300 mb-1">{exp.project}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-base text-gray-300 space-y-1">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
