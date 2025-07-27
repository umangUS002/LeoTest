import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { faculty, seniorExecutives, juniorExecutives } from "../assets/teamData";
import pawIcon from "../assets/icons/paw4.svg";
import bg from "../assets/icons/bg2.svg";

// Variants for section animation
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Card hover + fade-in variant
const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Card = ({ member, isFaculty, index }) => (
  <motion.div
    variants={cardVariant}
    custom={index}
    whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="bg-white/10 cursor-pointer backdrop-blur-sm rounded-xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-72 text-center text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-white/20 transition-all duration-300"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"
    />
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-300">{member.designation}</p>
    <p className="text-sm mt-1">{member.email}</p>
    {!isFaculty && (
      <div className="flex justify-center gap-4 mt-3 text-lg text-blue-400">
        {member.instagram && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
      </div>
    )}
  </motion.div>
);

const TeamSection = ({ title, members, isFaculty = false }) => (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="py-12"
  >
    <motion.h2
      className="text-3xl font-bold text-center text-white mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>

    <motion.div
      className="flex flex-wrap gap-8 justify-center"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {members.map((member, idx) => (
        <Card key={idx} member={member} isFaculty={isFaculty} index={idx} />
      ))}
    </motion.div>
  </motion.section>
);

const Team = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <section className="relative h-[calc(100vh-70px)] flex flex-col justify-center overflow-hidden pt-20 pb-16 px-4">
        <img
          src={bg}
          alt="Decorative Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 pb-20">
          {/* Text Section */}
          <div>
            <motion.h1
              className="text-7xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Meet Our Team
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-3 text-xl"
              initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            >
              The passionate individuals driving our club forward with dedication and vision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="pt-12 pb-16 px-4">
        <TeamSection title="Faculty Co-ordinator" members={faculty} isFaculty />
        <TeamSection title="Senior Executives" members={seniorExecutives} />
        <TeamSection title="Junior Executives" members={juniorExecutives} />
      </div>
    </div>
  );
};

export default Team;
