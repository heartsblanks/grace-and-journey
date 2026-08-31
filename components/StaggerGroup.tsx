"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={container}
      viewport={{ once: true, amount: 0.15 }}
      whileInView="visible"
    >
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
