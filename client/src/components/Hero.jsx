import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";
import { motion, useMotionValue, animate } from "framer-motion";
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

window.homeAnimationPlayedGlobal = window.homeAnimationPlayedGlobal || false;

const Hero = () => {

  const navigate = useNavigate();

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const fullVideoRef = useRef(null);
  const infoRef = useRef(null);
  const introVideoRef = useRef(null);

  const [progress, setProgress] = useState(() => {
    return window.homeAnimationPlayedGlobal ? 100 : 0;
  });
  const [isLoaded, setIsLoaded] = useState(() => {
    return window.homeAnimationPlayedGlobal;
  });
  const [gatesOpened, setGatesOpened] = useState(() => {
    return window.homeAnimationPlayedGlobal;
  });
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [leoTextAppeared, setLeoTextAppeared] = useState(() => {
    return window.homeAnimationPlayedGlobal;
  });
  const [eventDisplay, setEventDisplay] = useState(0);
  const [participantDisplay, setParticipantDisplay] = useState(0);
  const [introVideoUrl, setIntroVideoUrl] = useState("");
  const [bgVideoUrl, setBgVideoUrl] = useState("");

  const eventCount = useMotionValue(0);
  const participantCount = useMotionValue(0);

  // Pre-load videos and track progress
  useEffect(() => {
    if (window.homeAnimationPlayedGlobal) {
      return;
    }

    let isMounted = true;
    const createdUrls = [];

    // Track download progress for both files
    const progressTrackers = {
      intro: { loaded: 0, total: 0 },
      bg: { loaded: 0, total: 0 }
    };

    const updateProgress = () => {
      if (!isMounted) return;
      const total = progressTrackers.intro.total + progressTrackers.bg.total;
      const loaded = progressTrackers.intro.loaded + progressTrackers.bg.loaded;
      if (total > 0) {
        const percent = Math.min(100, Math.floor((loaded / total) * 100));
        setProgress(percent);
        if (percent === 100) {
          setIsLoaded(true);
        }
      }
    };

    const fetchVideo = async (url, type) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        
        const contentLength = response.headers.get("content-length");
        const total = contentLength ? parseInt(contentLength, 10) : 0;
        
        progressTrackers[type].total = total;
        progressTrackers[type].loaded = 0;

        if (!total) {
          const blob = await response.blob();
          if (isMounted) {
            progressTrackers[type].loaded = blob.size;
            progressTrackers[type].total = blob.size;
            updateProgress();
            const objectUrl = URL.createObjectURL(blob);
            createdUrls.push(objectUrl);
            return objectUrl;
          }
          return "";
        }

        const reader = response.body.getReader();
        const chunks = [];
        let bytesRead = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          bytesRead += value.byteLength;
          if (isMounted) {
            progressTrackers[type].loaded = bytesRead;
            updateProgress();
          }
        }

        if (isMounted) {
          const blob = new Blob(chunks, { type: "video/mp4" });
          const objectUrl = URL.createObjectURL(blob);
          createdUrls.push(objectUrl);
          return objectUrl;
        }
        return "";
      } catch (error) {
        console.error(`Failed to fetch video ${url}:`, error);
        return url;
      }
    };

    const initLoad = async () => {
      const isMobileDevice = window.innerWidth < 768;
      const introSrc = isMobileDevice ? assets.intro_vid_mob : assets.intro_vid;
      const bgSrc = assets.bg_video;

      const [introUrl, bgUrl] = await Promise.all([
        fetchVideo(introSrc, "intro"),
        fetchVideo(bgSrc, "bg")
      ]);

      if (isMounted) {
        setIntroVideoUrl(introUrl);
        setBgVideoUrl(bgUrl);
        setIsLoaded(true);
        setProgress(100);
      }
    };

    initLoad();

    return () => {
      isMounted = false;
      createdUrls.forEach((url) => {
        if (url && url.startsWith("blob:")) {
          try {
            URL.revokeObjectURL(url);
          } catch (e) {
            console.error("Failed to revoke URL:", e);
          }
        }
      });
    };
  }, []);

  // Gate opening runs 1.2s after load completes to transition smoothly
  useEffect(() => {
    if (isLoaded) {
      const gateTimeout = setTimeout(() => {
        setGatesOpened(true);
      }, 1200);
      return () => clearTimeout(gateTimeout);
    }
  }, [isLoaded]);

  // After load & gates open → show intro video (if not already played)
  useEffect(() => {
    if (isLoaded && gatesOpened && !window.homeAnimationPlayedGlobal) {
      setShowIntroVideo(true);
    }
  }, [isLoaded, gatesOpened]);

  // Automatically attempt playing intro video when ref or url changes
  useEffect(() => {
    if (showIntroVideo && introVideoRef.current) {
      introVideoRef.current.play().catch((err) => {
        console.log("Intro video play attempt failed:", err);
      });
    }
  }, [showIntroVideo, introVideoUrl]);

  // Automatically attempt playing full background video when active and ready
  useEffect(() => {
    if (gatesOpened && !showIntroVideo && fullVideoRef.current) {
      fullVideoRef.current.play().catch((err) => {
        console.log("Bg video play attempt failed:", err);
      });
    }
  }, [gatesOpened, showIntroVideo, bgVideoUrl]);

  // Control scroll restriction based on loading, intro video, and LEO text animation states
  useEffect(() => {
    if (!isLoaded || !gatesOpened || showIntroVideo || !leoTextAppeared) {
      window.dispatchEvent(new Event("disableScroll"));
    } else {
      window.dispatchEvent(new Event("enableScroll"));
    }
    return () => {
      window.dispatchEvent(new Event("enableScroll"));
    };
  }, [isLoaded, gatesOpened, showIntroVideo, leoTextAppeared]);

  // Resume play and sync time when returning to the tab (prevents freezing on tab switches)
  useEffect(() => {
    let hiddenTime = 0;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        hiddenTime = Date.now();
      } else if (document.visibilityState === "visible") {
        if (hiddenTime > 0) {
          const elapsed = (Date.now() - hiddenTime) / 1000;
          hiddenTime = 0; // reset

          if (showIntroVideo && introVideoRef.current) {
            const video = introVideoRef.current;
            const newTime = video.currentTime + elapsed;
            if (video.duration && newTime >= video.duration) {
              handleIntroEnd();
            } else {
              video.currentTime = newTime;
              video.play().catch((err) => console.log("Intro play resume error:", err));
            }
          } else if (fullVideoRef.current) {
            const video = fullVideoRef.current;
            const duration = video.duration;
            if (duration && !isNaN(duration)) {
              video.currentTime = (video.currentTime + elapsed) % duration;
            }
            video.play().catch((err) => console.log("Bg play resume error:", err));
          }
        } else {
          if (showIntroVideo && introVideoRef.current) {
            introVideoRef.current.play().catch((err) => console.log("Intro play resume error:", err));
          } else if (fullVideoRef.current) {
            fullVideoRef.current.play().catch((err) => console.log("Bg play resume error:", err));
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [showIntroVideo]);

  const handleIntroEnd = () => {
    setShowIntroVideo(false);
    window.homeAnimationPlayedGlobal = true;
  };

  const handleSkipAnimation = () => {
    window.homeAnimationPlayedGlobal = true;
    setIsLoaded(true);
    setGatesOpened(true);
    setShowIntroVideo(false);
    setLeoTextAppeared(true);
  };

  // Scroll animations
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
            end: isMobile ? "+=2500" : "+=4500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline.to(
          textRef.current,
          {
            scale: isMobile ? 80 : 270,
            transformOrigin: "center center",
            color: "transparent",
            ease: "none",
            duration: isMobile ? 1.6 : 0.6,
          },
          0
        );


        timeline.to(
          textRef.current,
          {
            opacity: 0,
            ease: "none",
            duration: 0.4,
            onComplete: () => {
              // 👇 Show Navbar after LEO finishes
              window.dispatchEvent(new Event("showNavbar"));
            },
          },
          "-=0.1"
        );

        timeline.to(
          fullVideoRef.current,
          {
            opacity: 1,
            ease: "none",
            duration: isMobile ? 1.6 : 0.3,

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
            duration: isMobile ? 1.0 : 0.4,
            onStart: () => {
              animate(eventCount, 20, {
                duration: 1,
                onUpdate(value) {
                  setEventDisplay(Math.floor(value));
                },
              });

              animate(participantCount, 10000, {
                duration: isMobile ? 1.6 : 1,
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
            duration: isMobile ? 1.6 : 0.4,
          },
          "<"
        );

        return () => { };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen md:-mt-20 -mt-10 max-sm:h-[100vh] w-full overflow-hidden hero-background flex items-center justify-center z-50"
    >
      {/* Loading screen */}
      {!gatesOpened && (
        <>
          <div className="absolute z-90 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <img
              src={assets.leologo}
              alt="Club Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
            />
            <div className="w-36 md:w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-text1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Gates */}
          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "-100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-text1/30 via-primary to-primary border-r-4 border-zinc-700 shadow-2xl z-70"
          />

          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-text1/30 via-primary to-primary border-l-4 border-zinc-700 shadow-2xl z-70"
          />
        </>
      )}

      {/* Intro video */}
      {showIntroVideo && (
        <video
          ref={introVideoRef}
          src={introVideoUrl || assets.intro_vid_mob}
          autoPlay
          muted
          playsInline
          onEnded={handleIntroEnd}
          className="absolute inset-0 w-full h-full object-cover z-[100] opacity-100 transition-opacity duration-1000"
        />
      )}

      {/* Background video */}
      <video
        ref={fullVideoRef}
        src={bgVideoUrl || assets.bg_video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 transition-all duration-1000"
        style={{ filter: "blur(0px)" }}
      />

      {/* LEO Text (appears after intro video ends) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={
          isLoaded && gatesOpened && !showIntroVideo
            ? { opacity: 1, y: 0 }
            : {}
        }
        transition={{ duration: 1.6, delay: 0.5 }}
        onAnimationComplete={() => {
          if (isLoaded && gatesOpened && !showIntroVideo) {
            setLeoTextAppeared(true);
          }
        }}
        className="flex flex-col text-center"
      >
        <h1
          ref={textRef}
          className="text-[30px] md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] z-10"
        >
          <span className="uppercase tracking-wider">LEO</span>
        </h1>
      </motion.div>

      {/* Info Section */}
      <div
        ref={infoRef}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10"
      >
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 w-full max-w-lg sm:max-w-2xl text-center shadow-2xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            10 YEARS OF LEO LEGACY
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Celebrating a decade of leadership, innovation, and service. Join
            the movement as we continue to shape the future with purpose and
            passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white font-semibold text-lg sm:text-xl">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl text-cyan-400">
                {eventDisplay}+
              </p>
              <p className="mt-1">Events Conducted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl text-yellow-300">
                {participantDisplay}+
              </p>
              <p className="mt-1">Participants Engaged</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      {(!gatesOpened || showIntroVideo) && (
        <button
          onClick={handleSkipAnimation}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-[200] px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 group"
        >
          <span>Skip Intro</span>
          <svg
            className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Hero;
