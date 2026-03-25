"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export function SplitText({
  children,
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.6,
}: SplitTextProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: delay + i * staggerDelay,
            ease: "easeOut",
          }}
          className={`inline-block ${wordClassName ?? ""}`}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
