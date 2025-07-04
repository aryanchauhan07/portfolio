import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import StickyHeader from "./StickyNav";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  let [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      // bottom: "-25%", ❌ comment ya remove kar de
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const isMobile = window.innerWidth <= 768;

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      top: isMobile ? "8%" : "2%", // ✅ Mobile ke liye text niche
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  {
    /* main ke baad ke section ka  div*/
  }

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  AR
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* <StickyHeader
  onNavigate={(id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
/> */}

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] overflow-hidden">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* 🔘 Menu Icon */}
            <div className="navbar fixed top-0 left-0 z-[50] w-full py-4 px-4 sm:py-6 sm:px-6">
              <div
                className="logo flex gap-2 sm:gap-3 items-center cursor-pointer scale-100"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="lines flex flex-col gap-[3px] sm:gap-[4px]">
                  <div className="w-6 sm:w-8 h-[2px] bg-white"></div>
                  <div className="w-4 sm:w-6 h-[2px] bg-white"></div>
                  <div className="w-3 sm:w-4 h-[2px] bg-white"></div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl text-white">
                  Menu
                </h3>
              </div>
            </div>

            {/* 🔘 Menu Drawer */}
            {menuOpen && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-[100] flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-white text-2xl sm:text-3xl md:text-4xl px-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-xl sm:top-6 sm:right-8 sm:text-2xl"
                >
                  ✕
                </button>

                {/* 🟣 Menu Links with smooth scroll and purple hover */}
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="hover:text-purple-500 transition duration-300"
                >
                  About
                </a>

                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="hover:text-purple-500 transition duration-300"
                >
                  Projects
                </a>

                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#experience")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="hover:text-purple-500 transition duration-300"
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className="hover:text-purple-500 transition duration-300"
                >
                  Contact
                </a>
              </div>
            )}

            {/* background images */}

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky top-0 left-0 w-full h-full object-cover rotate-[-10deg] scale-[1.2] sm:scale-[1.2] md:scale-[1.05] lg:scale-[1.1]"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg top-0 left-0 w-full h-full object-cover rotate-[-2deg] scale-[1.2] sm:scale-[1.2] md:scale-[1.05] lg:scale-[1.1]"
                src="./bg.png"
                alt=""
              />

              {/* text behind the images */}
              <div className="text text-white flex flex-col absolute top-[2%] left-1/2 -translate-x-1/2 rotate-[-10deg] text-center">
                {/* Word 1: Designer - Top Right */}
                <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-none">
                  Designer.
                </h1>
                <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-none">
                  Developer.
                </h1>

                {/* <div className="flex justify-center items-center gap-[2rem] sm:gap-[10rem] md:gap-[10rem] lg:gap-[15rem] xl:gap-[20rem]">
                  <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-none  lg:ml-20">
                    Developer.
                  </h1>
                  <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-none">
                    Doer.
                  </h1>
                </div> */}
              </div>

              {/* my own image */}
              <img
                className="absolute character left-1/2 -translate-x-1 bottom-24 sm:bottom-16 md:bottom-8 w-[60vw] max-w-[380px] h-auto rotate-[-10deg]"
                src="./me.png"
                alt=""
              />
            </div>

            {/* scroll icon */}

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-0 sm:gap-3 items-center">
                <i className="text-3xl sm:text-4xl ri-arrow-down-line"></i>
                <h3 className="text-base sm:text-lg  font-[sans-serif] ">
                  Scroll Down
                </h3>
              </div>

              {/* <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />  */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
