import { useEffect, useRef, useState } from "react";

const PageGradientWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const [showDoodles, setShowDoodles] = useState(false);

  /* Detect Instagram section */
  useEffect(() => {
    const insta = document.querySelector("#instagram");
    if (!insta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowDoodles(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(insta);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="page-gradient-wrapper">
      {/* CINEMATIC BASE */}
      <div className="pg-base" />

      {/* MOVING AURORA BLOBS */}
      <div className="pg-blob teal" />
      <div className="pg-blob amber" />
      <div className="pg-blob violet" />

      {/* NOISE FILM */}
      <div className="pg-noise" />

      {/* HERO BLEND */}
      <div className="pg-topfade" />

      {/* Instagram doodles */}
      {showDoodles && (
        <>
          <svg className="pg-doodle d1" viewBox="0 0 100 100">
            <path d="M10 50 Q50 10 90 50" />
          </svg>
          <svg className="pg-doodle d2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="28" />
          </svg>
          <svg className="pg-doodle d3" viewBox="0 0 100 100">
            <path d="M20 20 L80 80 M80 20 L20 80" />
          </svg>
        </>
      )}

      <div className="relative z-10">{children}</div>

      <style>{`
        .page-gradient-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        /* MAIN CINEMATIC GRADIENT */
        .pg-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(0,229,255,0.12), transparent 55%),
            radial-gradient(circle at 80% 70%, rgba(255,159,28,0.12), transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(193,122,254,0.08), transparent 60%),
            linear-gradient(
              180deg,
              #050608 0%,
              #0b0e14 30%,
              #0f1218 55%,
              #0b0e14 80%,
              #050608 100%
            );
        }

        /* AURORA BLOBS */
        .pg-blob {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(200px);
          opacity: 0.22;
          animation: blobFloat 35s ease-in-out infinite alternate;
        }

        .teal {
          top: 20%;
          left: -200px;
          background: #00e5ff;
        }

        .amber {
          bottom: -200px;
          right: -200px;
          background: #ff9f1c;
          animation-delay: 10s;
        }

        .violet {
          top: 55%;
          right: -180px;
          background: #c17afe;
          animation-delay: 20s;
        }

        @keyframes blobFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-160px); }
        }

        /* FILM GRAIN */
        .pg-noise {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E");
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* HERO BLEND */
        .pg-topfade {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 140px;
          background: linear-gradient(to bottom, black, transparent);
          pointer-events: none;
        }

        /* DOODLES */
        .pg-doodle {
          position: absolute;
          width: 120px;
          opacity: 0.14;
          stroke: #c17afe;
          stroke-width: 2.5;
          fill: none;
          animation: doodleFloat 10s ease-in-out infinite;
        }

        .d1 { bottom: 25%; left: 12%; }
        .d2 { bottom: 35%; right: 14%; animation-delay: 2s; }
        .d3 { bottom: 15%; left: 40%; animation-delay: 4s; }

        @keyframes doodleFloat {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

export default PageGradientWrapper;
