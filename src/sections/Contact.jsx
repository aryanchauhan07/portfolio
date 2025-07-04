import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "remixicon/fonts/remixicon.css";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g9e6hpo",
        "template_hd6ayep",
        form.current,
        "XKjKD54pqT-WuYdbyp"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message 😓");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-[#0f0f11] to-[#16141d] text-white "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-pricedown mb-6">
            Contact <span className="text-purple-400">me</span> for <br />
            collaboration
          </h2>
          <p className="text-gray-400 mb-6 font-sans">
            Let’s build something meaningful together — I’d love to hear from
            you!
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://gist.github.com/aryanchauhan07"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-line text-white text-2xl hover:text-purple-400"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aryanchauhan07/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-box-line text-white text-2xl hover:text-purple-400"></i>
            </a>
            {/* <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-twitter-x-line text-white text-2xl hover:text-purple-400"></i>
            </a> */}
            <a
              href="aryxnch@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-mail-line text-white text-2xl hover:text-purple-400"></i>
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-6"
        >
          <div>
            <h3 className="text-sm tracking-widest text-purple-300 uppercase font-sans">
              Get in touch
            </h3>
            <h2 className="text-4xl font-bold text-white mb-4 ">Contact.</h2>
          </div>

          <div className="space-y-4 font-sans">
            <div>
              <label className="text-white font-semibold text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
                className="mt-1 w-full p-3 bg-[#1b1825] text-white rounded-md border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-white font-semibold text-sm">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="What's your email?"
                required
                className="mt-1 w-full p-3 bg-[#1b1825] text-white rounded-md border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-white font-semibold text-sm">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="What do you want to say?"
                rows="5"
                required
                className="mt-1 w-full p-3 bg-[#1b1825] text-white rounded-md border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 rounded-md font-semibold transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
