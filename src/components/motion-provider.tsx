"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// Site-wide: users with prefers-reduced-motion get static content instead of
// entrance animations. Renders no DOM of its own.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
