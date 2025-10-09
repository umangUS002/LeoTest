import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { faculty, seniorExecutives, juniorExecutives } from "../assets/teamData";
import bgg from "../assets/icons/bgg.jpg";
import RecruitmentModal from "../components/RecruitmentModal";

// Card hover + fade-in variant
const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Card = ({ member, isFaculty }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="bg-white/10 cursor-pointer backdrop-blur-sm rounded-xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-72 text-center text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-white/20 transition-all duration-300"
  >
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"
    />
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-300">{member.position}</p>
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
  <section className="py-16">
    <motion.h2
      className="text-3xl font-bold text-center text-white mb-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>

    <div className="flex flex-wrap gap-8 justify-center items-start w-full">
      {members.map((member, idx) => (
        <Card key={idx} member={member} isFaculty={isFaculty} />
      ))}
    </div>
  </section>
);

const Team = () => {

  const [recruitmentModalOpen, setRecruitmentModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-black hero-background min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-16 px-4">
        <img
          src={bgg}
          alt="Decorative Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 pb-20">
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
              The passionate individuals driving our club forward with dedication
              and vision.
            </motion.p>

          </div>
        </div>
      </section>

      <RecruitmentModal
        recruitmentModal={recruitmentModalOpen}
        setRecruitmentModal={setRecruitmentModalOpen}
      />

      {/* Team Sections */}
      <div className="pt-12 pb-16 px-4">

      <section className="relative sm:mt-10 sm:max-w-[80%] sm:mx-[10%] rounded-xl flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#3ABEFF]/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#5F85FF]/20 blur-3xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl text-center px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]">
          K25 Recruitment is Live!
        </h2>
        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
          Be part of an energetic community that thrives on <span className="font-semibold text-white">leadership, creativity, and impact</span>. 
          Step into opportunities that help you grow, connect, and lead. 
        </p>

        {/* Button */}
        <motion.button
          onClick={() => setRecruitmentModalOpen(true)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer font-body px-6 mt-8 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-400 focus-ring text-white bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]/80 shadow-lg shadow-blue-500/30"
        >
          <span className="uppercase text-center text-sm sm:text-base tracking-wider">
            Join Us
          </span>
        </motion.button>
      </motion.div>
      </section>
        
        <TeamSection title="Faculty Co-ordinator" members={faculty} isFaculty />
        <TeamSection title="Senior Executives" members={seniorExecutives} />
        <TeamSection title="Junior Executives" members={juniorExecutives} />
      </div>
    </div>
  );
};

export default Team;
