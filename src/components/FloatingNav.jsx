import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#instagram" },
  { name: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  /* SHOW AFTER HERO */
  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999]
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
    >
      <nav
        className="relative px-6 py-3 rounded-full flex gap-6
        backdrop-blur-xl bg-black/30 border border-white/10"
      >
        {/* soft aura */}
        <div
          className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-[#C17AFE]/20 via-[#00e5ff]/10 to-[#ff9f1c]/20
          blur-xl opacity-60 pointer-events-none"
        />

        {navItems.map((item) => {
          const isActive = active === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm tracking-wide transition-all duration-500
                ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
            >
              {item.name}

              {/* active underline */}
              {isActive && (
                <span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2
                    w-6 h-[2px] rounded-full
                    bg-gradient-to-r from-[#C17AFE] to-[#ff9f1c]"
                />
              )}

              {/* active dot (NOW FOR EVERY SECTION) */}
              {isActive && (
                <span
                  className="absolute -top-2 -right-2 w-2 h-2 rounded-full
                  bg-[#ff9f1c] animate-pulse"
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNav;
