import { QuatrefoilIcon } from "@/components/icons";

const galleryItems = [
  ["Basilica exterior", "/gallery/basilica-exterior.svg"],
  ["Golden nave", "/gallery/golden-nave.svg"],
  ["Pilgrimage chapel", "/gallery/pilgrimage-chapel.svg"],
  ["Candle prayer", "/gallery/candle-prayer.svg"],
  ["Dome and altar", "/gallery/dome-and-altar.svg"],
  ["Quiet cloister", "/gallery/quiet-cloister.svg"]
];

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map(([label, image]) => (
        <div className="gallery-item" key={label} style={{ backgroundImage: `url(${image})` }}>
          <QuatrefoilIcon className="gallery-item-mark" size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
