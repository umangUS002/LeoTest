import { useEffect, useState } from "react";
import { assets, gallery } from "../assets/assets";
import { motion } from "framer-motion";

export default function Gallery() {

  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(gallery)
  }, [])

  return (
    <div className="mt-20 mb-30 flex flex-col text-center  max-sm:px-4 px-30">
      <div className="w-full backdrop-blur-xl bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30 px-5">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}

          transition={{ duration: 1, delay: 0.4 }}
          className="text-8xl max-sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
        >
          Captured Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}

          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-white/80 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent events — each image carrying emotion, love and nostalgia.
        </motion.p>

        {/* Gallery: Flex on desktop, Grid on small */}
        <div className="mt-10 w-full max-w-6xl mx-auto grid grid-cols-3 gap-4 sm:grid-cols-3 md:flex md:h-[400px] ">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg transition-all duration-600 md:h-full md:flex-grow md:w-56 md:hover:w-full"
            >
              <img
                src={image.link}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 sm:group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center flex justify-center mt-5">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}

            transition={{ duration: 0.6 }}
            className="mt-6 w-50 max-sm:w-[50%] px-10 py-3 bg-text1 hover:bg-text1/30 text-black hover:text-white rounded-xl shadow-md transition-all duration-300"
          >
            View All
          </motion.button>
        </div>
      </div>

    </div>


  );
};
