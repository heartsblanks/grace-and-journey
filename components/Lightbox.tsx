"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

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
    <motion.div
      animate={{ opacity: 1 }}
      aria-label={item.label}
      aria-modal="true"
      className="lightbox"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      transition={{ duration: 0.2 }}
    >
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
      <motion.figure
        animate={{ opacity: 1, scale: 1 }}
        className="lightbox-figure"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
        onClick={(event) => event.stopPropagation()}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            alt=""
            animate={{ opacity: 1 }}
            aria-hidden="true"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key={item.image}
            src={item.image}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
        </AnimatePresence>
        <figcaption>{item.label}</figcaption>
      </motion.figure>
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
    </motion.div>
  );
}
