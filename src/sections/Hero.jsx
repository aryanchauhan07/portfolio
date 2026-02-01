import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function Hero() {
  const heroRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!imgLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from(".hero-text h1", {
        y: 50,
        opacity: 0,
        stagger: 0.25,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(
          ".hero-text p",
          {
            y: 25,
            opacity: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".character",
          {
            opacity: 0,
            scale: 0.92,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [imgLoaded]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND */}
      <img
        className="absolute sky top-0 left-0 w-full h-full object-cover"
        src="./sky.png"
        alt=""
        onLoad={() => setImgLoaded(true)}
      />
      <img
        className="absolute bg top-0 left-0 w-full h-full object-cover"
        src="./bg.png"
        alt=""
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 md:bottom-[-80px] left-0 w-full z-10 px-4 md:px-6 pb-6 md:pb-10">
        <div
          className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-end gap-6 md:gap-10
                     border border-white/10 rounded-2xl md:rounded-3xl px-5 py-6 md:px-10 md:py-10 bg-transparent"
        >
          {/* IMAGE */}
          <div className="relative flex justify-center items-end order-2 md:order-1">
            <img
              className="character w-[55vw] md:w-[70vw] max-w-[460px] object-contain bottom-0"
              src="./ai.png"
              alt=""
            />
          </div>

          {/* TEXT */}
          <div className="hero-text space-y-4 md:space-y-5 self-center text-center md:text-left order-1 md:order-2">
            <h1
              className="text-[clamp(2.8rem,6vw,5rem)] leading-none font-pricedown font-extrabold"
              style={{ textShadow: "0 6px 25px rgba(0,0,0,0.6)" }}
            >
              Designer
            </h1>

            {/* GRADIENT TEXT */}
            <h1
              className="text-[clamp(2.8rem,6vw,5rem)] leading-none font-pricedown font-extrabold"
              style={{
                background: "linear-gradient(90deg, #F6D365, #FDA085, #FF9F1C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.7)",
                textShadow: "0 6px 30px rgba(255,160,60,0.35)",
              }}
            >
              Developer
            </h1>

            <div className="hero-buttons flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full font-semibold text-black
                           bg-gradient-to-r from-[#F6D365] to-[#FF9F1C]
                           shadow-[0_0_30px_rgba(255,160,60,0.45)]
                           hover:scale-105 transition"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-semibold text-white
                           border border-white/60
                           hover:bg-[#FF9F1C] hover:text-black
                           transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BLEND */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6
                      bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  );
}

export default Hero;
