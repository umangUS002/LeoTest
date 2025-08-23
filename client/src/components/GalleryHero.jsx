import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// ---------- image imports ----------
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpg";
import img11 from "../assets/gallery/img11.jpg";
import img12 from "../assets/gallery/img12.jpg";
import img13 from "../assets/gallery/img13.jpg";
import img14 from "../assets/gallery/img14.jpg";
import img15 from "../assets/gallery/img15.jpg";
import img16 from "../assets/gallery/img16.jpg";
import img17 from "../assets/gallery/img17.jpg";
import img18 from "../assets/gallery/img18.jpg";
import img19 from "../assets/gallery/img19.jpg";
import img20 from "../assets/gallery/img20.jpg";
import img21 from "../assets/gallery/img21.jpg";
import img22 from "../assets/gallery/img22.jpg";
import img23 from "../assets/gallery/img23.jpg";

// Columns for background scrolling
const first  = [img1, img2, img3, img4, img5];
const second = [img6, img7, img8, img9, img10];
const third  = [img11, img12, img13, img14, img15];
const fourth = [img16, img17, img18, img19];
const fifth  = [img20, img21, img22, img23];

function ScrollingColumn({ imgs, duration, reverse = false }) {
  const doubled = [...imgs, ...imgs];

  return (
    <div className="relative h-full w-[20%] overflow-hidden">
      <motion.div
        className="flex flex-col will-change-transform"
        style={{ translateZ: 0 }}
        animate={{ y: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-auto object-contain rounded-md my-1 mx-2 pointer-events-none"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Event-specific galleries
  const eventGalleries = {
    bitotsav: [img1, img2, img3, img4, img5, img6],
    pantheon: [img7, img8, img9, img10, img11],
    deepotsav: [img12, img13, img14, img15, img16],
    social: [img17, img18, img19, img20, img21, img22, img23],
  };

  const onSelectEvent = (event) => {
    setGalleryImages(eventGalleries[event]);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3, duration: 0.6 } 
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* --- scrolling background --- */}
      <div className="fixed inset-0 h-screen w-full flex z-0 overflow-hidden pointer-events-none">
        <ScrollingColumn imgs={first} duration={30} reverse={false} />
        <ScrollingColumn imgs={second} duration={34} reverse={true} />
        <ScrollingColumn imgs={third} duration={38} reverse={false} />
        <ScrollingColumn imgs={fourth} duration={42} reverse={true} />
        <ScrollingColumn imgs={fifth} duration={46} reverse={false} />
      </div>

      {/* --- foreground hero content --- */}
      <section
        id="gallery"
        className="relative h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-black/77 z-10" />

        <div className="relative z-20 text-center max-w-5xl px-6">
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Tagline */}
            <motion.div
              variants={item}
              className="inline-block border border-white/20 px-8 sm:px-10 py-3 sm:py-4 mb-10 sm:mb-16 backdrop-blur-sm bg-white/10 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span className="text-white font-body tracking-widest text-xs uppercase">
                Leo Club BIT Mesra
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-6 sm:mb-8 leading-[0.9] tracking-tight"
            >
              Our Gallery
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              variants={item}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              A glimpse into the vibrant journey of Leo Club BIT Mesra — from impactful events to unforgettable memories.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center"
            >
              {["bitotsav", "pantheon", "deepotsav", "social"].map((key, index) => (
                <motion.button
                  key={key}
                  onClick={() => onSelectEvent(key)}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto font-body px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl transition-all duration-400 focus-ring 
                    ${
                      index % 2 === 0
                        ? "text-black bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]/80"
                        : "text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
                    }`}
                >
                  <span className="uppercase text-sm tracking-wider">{key.toUpperCase()}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Event Gallery Modal --- */}
      {galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pt-15 bg-black/95 flex flex-col items-center justify-start z-50 p-6 overflow-y-auto"
        >
          {/* Close button */}
          <button
            className="absolute top-20 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
            onClick={() => setGalleryImages([])}
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white mt-8">
            Event Highlights
          </h2>

          {/* Event Grid */}
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full max-w-6xl"
          >
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`Event ${i}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-sm tracking-wide">Leo Club Event</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox Preview */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Full view"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
}
