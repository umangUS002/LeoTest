import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="overflow-x-hidden">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
}
