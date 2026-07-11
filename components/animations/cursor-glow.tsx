"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    const dot = dotRef.current;
    if (!node || !dot) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let dotX = targetX;
    let dotY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const render = () => {
      // Big ambient glow (slow follow)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      node.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;

      // Small dot (faster follow) that leans toward the movement direction
      dotX += (targetX - dotX) * 0.28;
      dotY += (targetY - dotY) * 0.28;
      const vx = targetX - dotX;
      const vy = targetY - dotY;
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      const speed = Math.min(Math.hypot(vx, vy), 60);
      const stretch = 1 + speed / 45; // elongate toward the cursor as it moves
      dot.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0) rotate(${angle}deg) scaleX(${stretch})`;

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(75,86,148,0.28) 0%, rgba(114,136,174,0.14) 40%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-2.5 w-2.5 rounded-full md:block"
        style={{
          background: "linear-gradient(90deg, #7288ae 0%, #4b5694 100%)",
          boxShadow: "0 0 10px rgba(114,136,174,0.75)",
          willChange: "transform",
        }}
      />
    </>
  );
}

