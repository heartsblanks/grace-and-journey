"use client";

import { useEffect } from "react";

type LightboxItem = {
  label: string;
  image: string;
};

type LightboxProps = {
  items: LightboxItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, activeIndex, onClose, onNavigate }: LightboxProps) {
  const item = items[activeIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.label}>
      <button aria-label="Close" className="lightbox-close" onClick={onClose} type="button">
        &times;
      </button>
      <button
        aria-label="Previous image"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        type="button"
      >
        &larr;
      </button>
      <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img alt="" aria-hidden="true" src={item.image} />
        <figcaption>{item.label}</figcaption>
      </figure>
      <button
        aria-label="Next image"
        className="lightbox-nav lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        type="button"
      >
        &rarr;
      </button>
    </div>
  );
}
