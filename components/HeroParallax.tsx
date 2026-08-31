"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function HeroParallax() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 700], shouldReduceMotion ? [0, 0] : [0, 140]);

  return (
    <motion.div className="hero-decor" style={{ y }}>
      <span aria-hidden="true" className="hero-glow" />
      <img alt="" aria-hidden="true" className="hero-rosette" src="/images/hero-rosette.svg" />
    </motion.div>
  );
}
