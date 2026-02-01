import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Instagram = () => {
  const sectionRef = useRef(null);

  const instagramPosts = [
    { id: 1, src: "/insta/pic1.jpeg", size: "tall" },
    { id: 2, src: "/insta/pic17.jpeg", size: "medium" },
    { id: 3, src: "/insta/pic13.jpg", size: "tall" },
    { id: 4, src: "/insta/pic10.jpeg", size: "medium" },
    { id: 5, src: "/insta/pic15.jpeg", size: "tall" },
    { id: 6, src: "/insta/pic3.jpeg", size: "medium" },
    { id: 7, src: "/insta/pic12.jpg", size: "tall" },
    { id: 8, src: "/insta/pic8.jpeg", size: "short" },
    { id: 9, src: "/insta/pic9.jpeg", size: "tall" },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".mood-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
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
      id="instagram"
      className="relative w-full py-16 md:py-32 px-4 md:px-12 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto space-y-12 md:space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-semibold">
            Visual Diary
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Moments, moods & memories — a small window into my everyday life.
          </p>
        </div>

        {/* PINTEREST GRID */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className={`mood-item mood-${post.size} break-inside-avoid overflow-hidden rounded-2xl md:rounded-3xl`}
            >
              <img
                src={post.src}
                alt={`memory ${post.id}`}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center pt-8 md:pt-12">
          <a
            href="https://www.instagram.com/_aryanchauhan__/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm tracking-widest uppercase text-[#C17AFE] border-b border-[#C17AFE] pb-1 hover:text-white hover:border-white transition"
          >
            View more on Instagram
          </a>
        </div>

      </div>

      <style>{`
        .mood-tall img { height: 420px; }
        .mood-medium img { height: 320px; }
        .mood-short img { height: 240px; }

        @media (max-width: 768px) {
          .mood-tall img { height: 280px; }
          .mood-medium img { height: 220px; }
          .mood-short img { height: 180px; }
        }
      `}</style>
    </section>
  );
};

export default Instagram;
