import React, { useEffect, useRef, useState } from "react";

function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: [0, 0.4] }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="contact"
      ref={ref}
      className={`relative w-full px-4 xs:px-8 md:px-15 py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden transition-all duration-1000 ease-out text-center ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative z-10 max-w-320 mx-auto">
        <div className="text-center mb-8 md:mb-10 animate-[fadeIn_1s_ease-in-out]">
          <h1
            className="font-monaspace text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold capitalize text-slate-50 mb-6"
            id="headerText"
          >
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 animate-[fadeIn_1.5s_ease-in-out]">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative bg-black/70 backdrop-blur-sm border border-blue-400/25 p-6 rounded-lg text-slate-300 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/80">
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <h2 className="text-xl font-semibold mb-2 text-blue-300 font-monaspace">
                Haaris Usman Saeed
              </h2>
              <h3 className="text-sm mb-3 text-cyan-300 font-open-sans font-medium">
                Event Head
              </h3>
              <p className="text-sm mb-1 flex items-center font-open-sans">
                {/* <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span> */}
                <span className="mr-2 text-red-500">
                  <i className="fas fa-phone"></i>
                </span>
                +92 316 4699448
              </p>
              <p className="text-sm break-words flex items-center font-open-sans">
                {/* <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span> */}
                <span className="mr-2 text-red-500">
                  <i className="fas fa-envelope"></i>
                </span>
                haarisusman20@gmail.com
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-cyan-600/20 via-blue-500/20 to-cyan-600/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative bg-black/70 backdrop-blur-sm border border-cyan-400/25 p-6 rounded-lg text-slate-300 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/80">
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <h2 className="text-xl font-semibold mb-2 text-cyan-300 font-monaspace">
                Adil Ali Azfar
              </h2>
              <h3 className="text-sm mb-3 text-blue-300 font-open-sans font-medium">
                Event Head
              </h3>
              <p className="text-sm mb-1 flex items-center font-open-sans">
                {/* <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span> */}
                <span className="mr-2 text-red-500">
                  <i className="fas fa-phone"></i>
                </span>
                +92 310 0853171
              </p>
              <p className="text-sm break-words flex items-center font-open-sans">
                {/* <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span> */}
                <span className="mr-2 text-red-500">
                  <i className="fas fa-envelope"></i>
                </span>
                adilaliazfar@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-6 animate-[fadeIn_2s_ease-in-out]">
          <div className="relative group w-full">
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative rounded-xl overflow-hidden border border-blue-400/25 backdrop-blur-sm bg-black/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
                width="100%"
                height="400"
                className="rounded-xl filter brightness-90 hover:brightness-100 transition duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 animate-[fadeIn_2.5s_ease-in-out]">
          <h2 className="text-lg font-semibold text-blue-300 mb-2 font-monaspace">
            Location
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-open-sans font-medium tracking-wide text-sm md:text-base">
            364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
          </p>
        </div>

        <div className="flex justify-center space-x-12 animate-[fadeIn_3s_ease-in-out]">
          <a
            href="https://www.instagram.com/jtinnoventions"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="Instagram"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-pink-400 transition duration-300 transform group-hover:scale-110">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
          <a
            href="mailto:jtinnoventions24@gmail.com"
            className="relative group"
            aria-label="Email"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-blue-400 transition duration-300 transform group-hover:scale-110">
              <i className="fas fa-envelope"></i>
            </div>
          </a>
          <a
            href="https://www.facebook.com/InnoventionsOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="Facebook"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-blue-500 transition duration-300 transform group-hover:scale-110">
              <i className="fab fa-facebook"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
