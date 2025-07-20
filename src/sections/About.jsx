import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AboutMeSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const boxes = gsap.utils.toArray(slider.querySelectorAll(".icon-box"));
    const totalWidth = boxes.length * 96;
    const loopTime = 20;

    gsap.set(boxes, {
      x: (i) => i * 96,
    });

    gsap.to(boxes, {
      x: `-=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
      duration: loopTime,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const skills = [
    "UI Design",
    "UX Research",
    "Front-End Dev",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Figma",
    "Canva",
    "Illustrator",
  ];

  const techStackIcons = [
    "javascript.svg",
    "tailwindcss.svg",
    "notion.png",
    "figma.png",
    "html.png",
    "css.png",
    "js.png",
    "nodejs.png",
    "mongodb.png",
    "github.png",
    "illustrator.png",
    "react.svg",
  ];

  return (
    <section
      id="about"
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black to-[#0f0f11] text-white  "
    >
      {/* HEADING */}
      <h2 className="text-4xl sm:text-5xl font-semibold mb-12 font-pricedown text-center md:text-left">
        About Me
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* INTRO CARD */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#242643] via-[#2d2f4a] to-[#1c1e2b] border border-white/10 shadow-lg backdrop-blur-md font-sans">
            <h3 className="text-2xl font-bold mb-3">Hi, I'm Aryan</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base space-y-2">
              <span>
                Some people paint, some compose music — I bring ideas to life
                through
                <span className="text-purple-400 font-semibold"> interfaces </span>
                and
                <span className="text-purple-400 font-semibold"> logic</span>.
              </span>
              <br />
              <span>
                As a
                <span className="text-purple-400 font-semibold"> designer </span>
                and
                <span className="text-purple-400 font-semibold">
                  {" "}full stack developer
                </span>, the web is my
                <span className="text-purple-400 font-semibold"> canvas</span> and
                <span className="text-purple-400 font-semibold"> code</span> is my medium.
              </span>
              <br />
              <span>
                I build experiences that are
                <span className="text-purple-400 font-semibold"> fast</span>,
                <span className="text-purple-400 font-semibold"> expressive</span>, and
                <span className="text-purple-400 font-semibold"> meaningful</span> —
                where every
                <span className="text-purple-400 font-semibold"> pixel</span> and every
                <span className="text-purple-400 font-semibold"> function</span> has a reason to exist.
              </span>
              <br />
              <span>
                I don’t create outside the screen — I create
                <span className="text-purple-400 font-semibold"> within it</span>.
              </span>
            </p>
          </div>

          {/* TIME ZONE CARD */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#23232f] via-[#1b1b28] to-[#101018] border border-white/10 shadow-lg backdrop-blur-md font-sans">
            <h3 className="text-xl font-bold mb-3">Time Zone</h3>
            <p className="text-gray-300 text-sm md:text-base">
              I’m based in India 🇮🇳 and open to remote work across all time zones.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 font-sans">
          {/* SKILLS CARD */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#22223D] via-[#1c1e2b] to-[#0f0f11] border border-white/10 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-black/40 px-3 py-1 rounded-full border border-white/10 text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CURRENTLY LEARNING CARD */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#1c1e2b] via-[#2d2f4a] to-[#242643] border border-white/10 shadow-lg backdrop-blur-md ">
            <h3 className="text-xl font-bold mb-3">Currently Learning</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Mobile App Development (React Native / Flutter)</li>
              <li>Advanced Web Development (Next.js, Animations, Web APIs)</li>
            </ul>
          </div>
        </div>

        {/* FULL WIDTH TECH STACK */}
        <div className="rounded-2xl p-6 md:col-span-2 bg-gradient-to-br from-[#9810FA] via-[#22223D] to-[#1c1e2b] border border-white/10 shadow-lg backdrop-blur-md font-sans">
          <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Tools that shape my work — and make building feel effortless.
          </p>

          <div ref={sliderRef} className="flex gap-4 overflow-hidden">
            {techStackIcons.map((icon, i) => (
              <div
                key={i}
                className="icon-box bg-black/50 p-4 rounded-2xl min-w-[96px] h-[96px] flex justify-center items-center hover:scale-105 transition"
              >
                <img
                  src={`./logos/${icon}`}
                  alt={`tech-${i}`}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
