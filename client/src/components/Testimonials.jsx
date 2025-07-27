import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote:
            "The finance club has allowed me to level my game professionally and personally. It has provided me invaluable experiences in team management, strategic planning, and networking with industry professionals, opening up numerous career opportunities.",
        name: "Lakshya Saini",
        title: "Joint President",
        image: "https://i.pravatar.cc/100?img=1",
    },
    {
        quote:
            "Being part of the club has taught me leadership and allowed me to connect with mentors in the industry. Truly a transformative experience!",
        name: "Priya Verma",
        title: "Club Member",
        image: "https://i.pravatar.cc/100?img=2",
    },
    {
        quote:
            "This experience broadened my perspective and gave me lifelong friends and valuable skills.",
        name: "Rahul Mehta",
        title: "Event Coordinator",
        image: "https://i.pravatar.cc/100?img=3",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div 
    className="bg-gray-800 backdrop-blur p-6 rounded-2xl max-w-3xl mx-auto text-center shadow-lg transition-all duration-300">
        <p className="text-lg text-gray-500 mb-6">{testimonial.quote}</p>
        <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
        <p className="text-sm text-text1">{testimonial.title}</p>
    </div>
);

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <div 
        className="bg-primary py-20 relative">
            <div className="flex justify-center pb-15 pt-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
                >
                    Testimonials
                </motion.h1>
            </div>

            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6}}
            className="relative z-10 px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TestimonialCard testimonial={testimonials[index]} />
                    </motion.div>
                </AnimatePresence>                

                {/* Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;
