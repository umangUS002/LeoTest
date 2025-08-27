import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";

const aboutItems = [
  {
    title: "Leadership",
    description:
      "We nurture individuals into confident, ethical, and visionary leaders through initiatives, workshops, and team projects.",
  },
  {
    title: "Experience",
    description:
      "Hands-on opportunities and real-world exposure are at the heart of LEO. We believe experience drives growth.",
  },
  {
    title: "Opportunity",
    description:
      "LEO creates gateways—be it networking, innovation, or skill-building—for members to thrive and excel.",
  },
];

export default function About() {
  return (
    <div id="about" className="relative  text-text1 py-18 max-sm:py-10 px-4 md:px-30 overflow-hidden ">

      {/* Floating Abstract Blob */}
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-3/5 w-[400px] h-[400px] bg-cyan-500 opacity-10 blur-2xl rounded-full z-0"
      />

      {/* Mobile Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}

        transition={{ duration: 0.3 }}
        className="text-center md:hidden text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mt-15 mb-5 z-10 relative"
      >
        About Us
      </motion.h2>

      <div className="flex max-sm:flex-col gap-20 bg-primary backdrop-blur-xl rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30">
        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}

          transition={{ duration: 1, delay: -0.1 }}
          className="relative max-w-4xl mx-auto z-10 min-w-[50%]">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate-600 z-0" />

          <div className="flex flex-col gap-[6vh] max-sm:gap-[10vh] relative z-10">
            {aboutItems.map((item, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: false, amount: 0.2 });

              return (
                <motion.div
                  key={i}
                  ref={ref}
                  className="flex flex-col items-center text-center px-4"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}

                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Animated Tick Circle */}
                  <motion.div
                    className="mb-6 w-20 h-20 rounded-full border-8 shadow-xl"
                    animate={{
                      backgroundColor: inView ? "#3ABEFF" : "#1e293b",
                      borderColor: inView ? "#ffffff" : "#64748b",
                      scale: inView ? 1.1 : 0.7,
                      opacity: inView ? 1 : 0.3,
                      boxShadow: inView ? "0 0 25px #3ABEFF88" : "0 0 0px transparent",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 120,
                    }}
                  />

                  <h3 className="text-4xl font-bold text-text1">{item.title}</h3>

                  <motion.p
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.5 }}

                    className="mt-4 text-base sm:text-lg text-white/70 max-w-xl"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Description Section (Hidden on Small Screens) */}
        <div className="max-sm:hidden max-sm:mt-20 text-2xl px-4 flex flex-col md:gap-5 items-center justify-top">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="relative text-center max-md:hidden text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-10 z-10 after:content-[''] after:absolute after:left-1/10 after:translate-x-1/2 after:-bottom-3 after:w-60 after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#00FFF0] after:via-[#3ABEFF] after:to-[#5F85FF] after:shadow-md"
          >
            About Us
          </motion.h1>


          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-white/80 text-center"
          >
            At LEO Club, we are a dynamic community of young leaders committed to
            service, personal development, and social impact. Backed by Lions
            Clubs International, we empower youth to lead change through hands-on
            projects, leadership training, and community outreach.
          </motion.h1>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}

            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 text-lg space-y-4 text-left border bg-gray-800 border-white p-3"
          >
            {[
              "Leadership development through real-world experiences",
              "Organizing impactful social service events",
              "Creating platforms for youth to express, lead, and grow",
              "Networking with changemakers across the country",
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}

                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex items-start gap-3"
              >
                <span
                  className="w-6 h-6"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#grad${idx})">
                      <defs>
                        <linearGradient id="grad${idx}" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#00FFF0"/>
                          <stop offset="50%" stop-color="#3ABEFF"/>
                          <stop offset="100%" stop-color="#5F85FF"/>
                        </linearGradient>
                      </defs>
                      <path d="M9 16.17l-3.88-3.88a1 1 0 0 0-1.41 1.42l4.59 4.58a1 1 0 0 0 1.41 0l10-10a1 1 0 1 0-1.41-1.42L9 16.17z"/>
                    </svg>
                  `,
                  }}
                />
                <p className="text-gray-200 text-sm">{point}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Logo (Desktop) */}
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            src={assets.leologo}
            alt="LEO Logo"
            className="h-60 w-70 mt-15"
          />
        </div>

        {/* Floating Logo (Mobile) */}
        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          src={assets.leologo}
          alt="LEO Logo"
          className="h-40 w-45 mx-auto mt-5 md:hidden"
        />
      </div>
    </div>
  );
}
