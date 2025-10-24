import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import EventsScroller from '../components/Events'
import Gallery from '../components/Gallery'
import Blogs from '../components/Blogs'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className="relative hero-background text-white overflow-x-hidden">

        {/* 🔹 Background Blobs - Stationary and behind content */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 18,
            ease: "easeInOut",
          }}
          className="fixed top-1/2 left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-10 pointer-events-none"
        />

        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 16,
            ease: "easeInOut",
          }}
          className="fixed bottom-1/4 right-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-0 pointer-events-none"
        />

        {/* 🔸 Scrollable Content */}
        <div className="relative z-10">
           
          <section className="relative mt-15 mx-5 sm:max-w-[80%] sm:mx-[10%] rounded-xl flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#3ABEFF]/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#5F85FF]/20 blur-3xl"></div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
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
                onClick={() => navigate('/team')}
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

          <About />
          <EventsScroller />
          <Gallery />
          <Blogs />
        </div>
      </div>
    </div>


  )
}

export default Home
