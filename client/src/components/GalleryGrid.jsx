import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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
import img24 from "../assets/gallery/img24.jpg";
import img25 from "../assets/gallery/img25.jpg";
import img26 from "../assets/gallery/img26.jpg";
import img27 from "../assets/gallery/img27.jpg";
import img28 from "../assets/gallery/img28.jpg";
import img29 from "../assets/gallery/img29.jpg";
import img30 from "../assets/gallery/img30.jpg";
import img31 from "../assets/gallery/img31.jpg";
import img32 from "../assets/gallery/img32.jpg";
import img33 from "../assets/gallery/img33.jpg";
import img34 from "../assets/gallery/img34.jpeg";
import img35 from "../assets/gallery/img35.jpeg";
import img36 from "../assets/gallery/img36.jpeg";
import img37 from "../assets/gallery/img37.jpeg";
import img38 from "../assets/gallery/img38.jpeg";
import img39 from "../assets/gallery/img39.jpeg";
import img40 from "../assets/gallery/img40.jpeg";
import img41 from "../assets/gallery/img41.jpeg";
import img42 from "../assets/gallery/img42.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23,img24,img25,img26,img27,img28,img29,img30,img35,img36,img37,img38,
img39,img40,img41,img42,
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="gallerygrid" className="relative z-20 py-20 px-6 lg:px-12 hero-background text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Moments from Our Journey
      </h2>

      {/* 🔹 Animated grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={item}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => setSelected(src)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-4">
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 Lightbox Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            src={selected}
            alt="Full view"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
}
