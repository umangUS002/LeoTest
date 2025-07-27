import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import EventsScroller from '../components/Events'
import Gallery from '../components/Gallery'
import Blogs from '../components/Blogs'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

function Home() {
  return (
    <div>
            <Hero />
<div
  className="relative text-white overflow-x-hidden bg-fixed bg-cover bg-center"
  style={{ backgroundImage: `url(${assets.bg})` }}
>
      {/* 🔹 Background Blobs - Stationary and behind content */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 18,
          ease: "easeInOut",
        }}
        className="fixed hidden top-3/5 left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-10 pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 16,
          ease: "easeInOut",
        }}
        className="fixed hidden bottom-3/5 right-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-0 pointer-events-none"
      />

      {/* 🔸 Scrollable Content */}
      <div className="relative z-10">
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
