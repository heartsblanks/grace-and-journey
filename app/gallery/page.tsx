import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Gallery"
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Gallery</p>
        <h1>Moments from the journey</h1>
        <p>Photos and visual notes from ministry life, pilgrimages, and community gatherings.</p>
      </section>
      <Reveal className="section alt">
        <GalleryGrid />
      </Reveal>
    </>
  );
}
