import { GalleryGrid } from "@/components/GalleryGrid";

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
      <section className="section alt">
        <GalleryGrid />
      </section>
    </>
  );
}
