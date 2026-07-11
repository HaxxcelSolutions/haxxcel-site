"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps each route so navigations get a subtle fade-in.
 * Only `opacity` is animated (no transform) so it does not create a
 * containing block that would break `position: fixed` overlays like the
 * portfolio lightbox.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
