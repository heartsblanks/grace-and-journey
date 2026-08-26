const galleryItems = [
  "Pilgrimage preparation",
  "Community gathering",
  "Ministry moment",
  "Sacred place",
  "Prayer and reflection",
  "Journey notes"
];

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <div className="gallery-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
