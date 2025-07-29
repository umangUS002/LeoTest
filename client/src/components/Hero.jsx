import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";
import { motion, useMotionValue, animate } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const fullVideoRef = useRef(null);
  const infoRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gatesOpened, setGatesOpened] = useState(false);
  const [eventDisplay, setEventDisplay] = useState(0);
  const [participantDisplay, setParticipantDisplay] = useState(0);

  const eventCount = useMotionValue(0);
  const participantCount = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    const gateTimeout = setTimeout(() => {
      setGatesOpened(true);
    }, 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(gateTimeout);
    };
  }, []);

  useEffect(() => {
  let mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)",
    },
    (context) => {
      let { isMobile } = context.conditions;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=1200" : "+=3500",
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline.to(
        textRef.current,
        {
          scale: isMobile ? 45 : 70,
          color: "transparent",
          ease: "power2.inOut",
          duration: 0.6,
        },
        0
      );

      timeline.to(
        textRef.current,
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.4,
        },
        "-=0.3"
      );

      timeline.to(
        fullVideoRef.current,
        {
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.3,
        },
        "-=0.4"
      );

      timeline.fromTo(
        infoRef.current,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.4,
          onStart: () => {
            animate(eventCount, 10, {
              duration: 1,
              onUpdate(value) {
                setEventDisplay(Math.floor(value));
              },
            });

            animate(participantCount, 1000, {
              duration: 1,
              onUpdate(value) {
                setParticipantDisplay(Math.floor(value));
              },
            });
          },
        },
        "+=0.3"
      );

      timeline.to(
        fullVideoRef.current,
        {
          filter: "blur(20px)",
          ease: "power2.out",
          duration: 0.4,
        },
        "<"
      );

      // ✅ Don't call context.revert() here — it's already handled by mm.revert()
      return () => {};
    }
  );

  return () => mm.revert(); // ✅ correct cleanup
}, []);



  return (
    <div
      ref={containerRef}
      className="h-screen md:-mt-20 -mt-10 max-sm:h-[100vh] w-full overflow-hidden bg-black flex items-center justify-center z-99"
    >
      {!gatesOpened && (
        <>
          <div className="absolute z-50 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <img src={assets.leologo} alt="Club Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
            <div className="w-36 md:w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-text1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "-100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-text1/30 via-primary to-primary border-r-4 border-zinc-700 shadow-2xl z-40"
          />

          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-text1/30 via-primary to-primary border-l-4 border-zinc-700 shadow-2xl z-40"
          />
        </>
      )}

      {/* Background video */}
      <video
        ref={fullVideoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 transition-all duration-1000"
        style={{ filter: "blur(0px)" }}
      >
        <source src={assets.bg_video} type="video/mp4" />
      </video>

      {/* LEO Text */}
      <h1
        ref={textRef}
        className="text-[100px] md:text-[200px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] z-10"
      >
        <span className="uppercase">LEO</span>
      </h1>

      {/* Info Section */}
      <div
        ref={infoRef}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10"
      >
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-2xl text-center shadow-2xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">20 YEARS OF LEO LEGACY</h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Celebrating two decades of leadership, innovation, and service. Join the movement as we continue to shape the future with purpose and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white font-semibold text-lg sm:text-xl">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl text-cyan-400">{eventDisplay}+</p>
              <p className="mt-1">Events Conducted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl text-yellow-300">{participantDisplay}+</p>
              <p className="mt-1">Participants Engaged</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
