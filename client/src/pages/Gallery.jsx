import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";
import { useEffect } from "react";



export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
}
