import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


const blogs = [
  {
    name: "Good Friday",
    title: "Tushita",
    image: assets.post1,
  },
  {
    name: "Ganesh Chaturthi",
    title: "Ipsha Vats",
    image: assets.post2,
  },
  {
    name: "International Justice",
    title: "Aditi",
    image: assets.post3,
  },
];

const BlogCard = ({ testimonial }) => (
  <div className="bg-gray-800 backdrop-blur p-6 max-sm:p-0 rounded-2xl w-md max-sm:w-[80vw] mx-auto text-center shadow-lg transition-all duration-300">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-full h-104 max-sm:h-74 rounded-lg mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl max-sm:text-base font-semibold text-gray-400">{testimonial.name}</h3>
    <p className="text-sm text-text1">{testimonial.title}</p>
  </div>
);

const Blogs = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-16 max-sm:pb-20 justify-center align-center max-sm:px-4 min-h-[80vh] flex items-center md:mb-50">
      <div className="flex flex-col bg-primary md:flex-row items-center justify-center gap-10 w-full max-w-7xl w-full backdrop-blur-xl rounded-lg pt-10 max-sm:pt-0 pb-10 max-sm:pb-5 shadow-lg shadow-text1/30">
        {/* === Left Content === */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center py-10">
          <div className="absolute  top-0 right-0 h-full md:w-10 w-8  z-10 pointer-events-none" />


          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}

              viewport={{ once: false, amount: 0.5 }}

              transition={{ duration: 0.5 }}
            >
              <BlogCard testimonial={blogs[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-6 max-sm:mt-2 gap-2">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* === Right Section === */}
        <div className="w-full max-sm:-mt-15 max-sm:px-2 md:w-1/2 flex flex-col items-center md:items-center justify-center text-center md:text-center">
          <div className="max-w-md">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}

              transition={{ duration: 1, delay: 0.4 }}
              className="relative text-4xl  sm:text-8xl font-extrabold pb-0 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] after:content-[''] after:absolute after:left-3/10 max-sm:after:left-2/10 after:translate-x-1/2 after:-bottom-3 after:w-50 max-sm:after:w-25 after:h-[4px] after:rounded-full after:bg-gradient-to-r after:from-[#00FFF0] after:via-[#3ABEFF] after:to-[#5F85FF] after:shadow-md"
            >
              Our Posts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}

              className="text-white/80 sm:mt-4 mt-10 max-sm:mt-5 md:pt-6 sm:text-lg text-sm"
            >
              Explore our club blogs, posts and other content. Join us for engaging learning visual experience.
            </motion.p>

            <motion.button onClick={() => navigate('/content')}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}

              transition={{ duration: 0.5 }}
              className="sm:mt-6 sm:px-8 sm:py-3 mt-4 px-4 py-2 bg-text1 hover:bg-text1/30 text-black hover:text-white rounded-xl shadow-md transition-all duration-300"
            >
              Show More
            </motion.button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blogs;
