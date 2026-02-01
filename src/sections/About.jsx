import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Figma",
  "Tailwind CSS",
  "GSAP",
  "TypeScript",
  "Express",
  "Next.js",
];

const skills = [
 "UI/UX Design",
  "Generative AI Development",
  "MERN Stack Development",
  "Backend APIs",
 "Data Structures & Algorithms",
  "Prototyping",
  "API Integration",
];

const About = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  /* fade cards */
  useEffect(() => {
    gsap.fromTo(
      ".about-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  /* marquee auto + drag */
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let speed = 0.3;
    let rafId;

    const loop = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(loop);
    };

    loop();

    const onDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const onLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-16 md:py-32 px-4 md:px-12 text-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto space-y-14 md:space-y-24">

        {/* HEADING */}
        <div className="text-center space-y-4">
          <h2 className="graffiti-title">ABOUT</h2>
          <p className="text-sm text-white/70">Who I am & what I build</p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div className="about-card p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 space-y-6">
            <h3 className="text-xl font-semibold">Hi, I’m Aryan Chauhan</h3>
            <p className="text-white/85">
             A designer and developer who blends curiosity with clarity to build thoughtful digital experiences. 
             Fueled by coffee and late night coding sessions, I enjoy exploring ideas, refining them through design and engineering, and bringing them to life through clean, user focused interfaces.
            </p>
          </div>

          <div className="about-card p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 bg-black/40">
            <h3 className="text-xl font-semibold mb-4 md:mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-pill text-xs md:text-sm text-center px-3 md:px-5 py-2 rounded-full"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="space-y-6">
          <div className="w-full h-px bg-white/20" />

          <div
            ref={marqueeRef}
            className="overflow-x-scroll whitespace-nowrap cursor-grab select-none"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="inline-flex py-6">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="tech-pill mx-4 md:mx-6 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/20" />
        </div>
      </div>

      <style>{`
        .graffiti-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          letter-spacing: 0.14em;
          background: linear-gradient(90deg, #00e5ff, #ff9f1c, #C17AFE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tech-pill {
          padding: 0.45rem 1.3rem;
          border-radius: 9999px;
          border: 1px solid #C17AFE;
          color: #C17AFE;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          transition: all 0.35s ease;
        }

        .tech-pill:hover {
          color: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 22px rgba(255,255,255,0.35);
          transform: translateY(-2px);
        }

        .skill-pill {
          border: 1px solid rgba(193,122,254,0.6);
          color: white;
          background: linear-gradient(
            135deg,
            rgba(193,122,254,0.18),
            rgba(193,122,254,0.05)
          );
          transition: all 0.35s ease;
        }

        .skill-pill:hover {
          box-shadow: 0 0 18px rgba(193,122,254,0.45);
          transform: translateY(-3px);
          background: linear-gradient(
            135deg,
            rgba(193,122,254,0.3),
            rgba(193,122,254,0.12)
          );
        }

        .cursor-grabbing {
          cursor: grabbing !important;
        }

        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;
