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

  return (
    <section
      id="about"
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-[#000000] to-[#0f0f11] text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-12 font-pricedown">
        About Me
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT STACK */}
        <div className="flex flex-col gap-6">
          {/* Intro */}
          <div className="relative rounded-2xl p-6 h-[280px] font-sans bg-gradient-to-br from-[#242643] via-[#2d2f4a] to-[#1c1e2b] border border-white/5 shadow-md backdrop-blur-md overflow-hidden">
            {/* <img
              src="./import/coding-pov.png"
              className="absolute right-2 top-7 w-64 opacity-30"
              alt="Code"
            /> */}

            <h3 className="text-2xl font-bold mb-2">Hi, I'm Aryan</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Some people paint, some compose music — I bring ideas to life
              through
              <span className="text-purple-400 font-semibold">
                {" "}
                interfaces{" "}
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold"> logic</span>.
              <br />
              As a
              <span className="text-purple-400 font-semibold">
                {" "}
                designer{" "}
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold">
                {" "}
                full stack developer
              </span>
              , the web is my
              <span className="text-purple-400 font-semibold"> canvas</span> and
              <span className="text-purple-400 font-semibold"> code</span> is my
              medium.
              <br />I build experiences that are
              <span className="text-purple-400 font-semibold"> fast</span>,
              <span className="text-purple-400 font-semibold"> expressive</span>
              , and
              <span className="text-purple-400 font-semibold">
                {" "}
                meaningful
              </span>{" "}
              — where every
              <span className="text-purple-400 font-semibold"> pixel</span> and
              every
              <span className="text-purple-400 font-semibold">
                {" "}
                function
              </span>{" "}
              has a reason to exist.
              <br />
              <br />I don’t create outside the screen — I create
              <span className="text-purple-400 font-semibold"> within it</span>.
            </p>
          </div>

          {/* Time zone */}
          <div className="rounded-2xl p-6 h-[180px] font-sans bg-gradient-to-br from-[#23232f] via-[#1b1b28] to-[#101018] border border-white/5 shadow-md backdrop-blur-md">
            <h3 className="text-xl font-bold mb-2">Time Zone</h3>
            <p className="text-gray-300">
              I’m based in India 🇮🇳 and open to remote work across all time
              zones.
            </p>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-6">
          {/* Skills */}
          <div className="rounded-2xl p-6 h-[180px] font-sans bg-gradient-to-br from-[#22223D] via-[#1c1e2b] to-[#0f0f11] border border-white/5 shadow-md backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/90">
              {[
                "UI Design",
                "UX Research",
                "Front-End Dev",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Figma",
                "Canva",
                "illustrator",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-black/30 px-3 py-1 rounded-full border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="rounded-2xl p-6 h-[280px] font-sans bg-gradient-to-br from-[#1c1e2b] via-[#2d2f4a] to-[#242643] border border-white/5 shadow-md backdrop-blur-md">
            <h3 className="text-xl font-bold mb-2">Currently Learning</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-1 text-sm">
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Mobile App Development (React Native / Flutter)</li>
              <li>Advanced Web Development (Next.js, Animations, Web APIs)</li>
          
            </ul>
          </div>
        </div>

        {/* Tech Stack - Full Width */}
        <div className="rounded-2xl p-6 md:col-span-2 font-sans bg-gradient-to-br from-[#9810FA] via-[#22223D] to-[#1c1e2b] border border-white/5 shadow-md backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-2">Tech Stack</h3>
          <p className="text-gray-300 mb-4">
            Tools that shape my work — and make building feel effortless.
          </p>

          <div ref={sliderRef} className="flex gap-4 overflow-hidden">
            {[
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
              
            ].map((icon, i) => (
              <div
                key={i}
                className="icon-box bg-black/60 p-4 rounded-2xl min-w-[96px] h-[96px] flex justify-center items-center hover:scale-105 transition"
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
