"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** seconds for one full loop */
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export default function Marquee({ children, speed = 30, reverse = false, className = "" }: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div
        className="flex shrink-0 items-center gap-12 pr-12 marquee-track"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-12 pr-12 marquee-track"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  );
}
