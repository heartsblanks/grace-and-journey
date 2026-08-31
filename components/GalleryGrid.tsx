"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/Lightbox";
import { StaggerGroup } from "@/components/StaggerGroup";
import { QuatrefoilIcon } from "@/components/icons";

const categories = ["All", "Basilica", "Pilgrimage", "Prayer", "Ministry"] as const;

const galleryItems = [
  { label: "Basilica exterior", image: "/gallery/basilica-exterior.svg", category: "Basilica" },
  { label: "Golden nave", image: "/gallery/golden-nave.svg", category: "Basilica" },
  { label: "Pilgrimage chapel", image: "/gallery/pilgrimage-chapel.svg", category: "Pilgrimage" },
  { label: "Candle prayer", image: "/gallery/candle-prayer.svg", category: "Prayer" },
  { label: "Dome and altar", image: "/gallery/dome-and-altar.svg", category: "Basilica" },
  { label: "Quiet cloister", image: "/gallery/quiet-cloister.svg", category: "Ministry" }
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
        {categories.map((category) => (
          <button
            aria-selected={activeCategory === category}
            className={`gallery-filter ${activeCategory === category ? "is-active" : ""}`}
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setLightboxIndex(null);
            }}
            role="tab"
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <StaggerGroup className="gallery-grid">
        {filteredItems.map((item, index) => (
          <button
            aria-label={`View ${item.label}`}
            className="gallery-item"
            key={item.label}
            onClick={() => setLightboxIndex(index)}
            style={{ backgroundImage: `url(${item.image})` }}
            type="button"
          >
            <QuatrefoilIcon className="gallery-item-mark" size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </StaggerGroup>
      <AnimatePresence>
        {lightboxIndex !== null ? (
          <Lightbox
            activeIndex={lightboxIndex}
            items={filteredItems}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
