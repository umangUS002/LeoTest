import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LayeredWaveBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Movement amounts (parallax depths)
  const offset1 = scrollY * 0.1;
  const offset2 = scrollY * 0.15;
  const offset3 = scrollY * 0.2;

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 3.2}}
    className="absolute mb-0 inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Back Wave */}
      <div
        style={{ transform: `translateY(-${offset1}px)` }}
        className="absolute bottom-0 w-full transition-transform duration-75 ease-out"
      >
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#3ABEFF"
            fillOpacity="0.05"
            d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,229.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Middle Wave */}
      <div
        style={{ transform: `translateY(-${offset2}px)` }}
        className="absolute bottom-0 w-full transition-transform duration-75 ease-out"
      >
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#3ABEFF"
            fillOpacity="0.08"
            d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,186.7C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Front Wave */}
      <div
        style={{ transform: `translateY(-${offset3}px)` }}
        className="absolute bottom-0 w-full transition-transform duration-75 ease-out"
      >
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#3ABEFF"
            fillOpacity="0.12"
            d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,138.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L0,320Z"
          />
        </svg>
      </div>
    </motion.div>
  );
}
