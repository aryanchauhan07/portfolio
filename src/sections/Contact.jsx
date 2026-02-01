import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".contact-anim",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g9e6hpo",
        "template_hd6ayep",
        form.current,
        "KjKD54pqT-WuYdbyp"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => toast.error("Failed to send message")
      )
      .finally(() => setLoading(false));
  };

  const socials = [
    { icon: "ri-github-line", url: "https://github.com/aryanchauhan07" },
    { icon: "ri-linkedin-box-line", url: "https://www.linkedin.com/in/aryanchauhan07/" },
    { icon: "ri-instagram-line", url: "https://www.instagram.com/_aryanchauhan__/" },
    { icon: "ri-mail-line", url: "mailto:aryxnch@gmail.com" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-12 text-white border-t-2 border-white/50 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/contact.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CINEMATIC FADE FROM EXPERIENCE */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f0f12] to-transparent" />

      {/* SOFT BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4 contact-anim">
          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-semibold">
            Let’s build something
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Got an idea or a project in mind? Let’s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div className="space-y-8 contact-anim">
            <p className="text-white/80 leading-relaxed">
              I’m currently open for freelance and collaborations.  
              Design, development, or something in between — let’s make it real.
            </p>

            <div className="flex gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C17AFE] transition"
                >
                  <i
                    className={`${s.icon} text-xl text-white/70 hover:text-[#C17AFE] transition`}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>
          </div>

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-anim p-8 rounded-3xl bg-black/55 border border-white/10 backdrop-blur-sm space-y-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-white/30 focus:border-[#C17AFE] outline-none py-2 text-white placeholder:text-white/50"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              required
              className="w-full bg-transparent border-b border-white/30 focus:border-[#C17AFE] outline-none py-2 text-white placeholder:text-white/50"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-transparent border-b border-white/30 focus:border-[#C17AFE] outline-none py-2 resize-none text-white placeholder:text-white/50"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3 rounded-full border border-[#C17AFE] text-[#C17AFE] hover:bg-[#C17AFE] hover:text-black transition"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <div className="pt-12 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Aryan Chauhan — Designed & built with intention
        </div>
      </div>
    </section>
  );
};

export default Contact;
