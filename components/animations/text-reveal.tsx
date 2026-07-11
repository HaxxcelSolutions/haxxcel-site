"use client";

import { useEffect, useRef, useState } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
};

export default function TextReveal({ text, className = "", wordClassName = "" }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span
            style={{ transitionDelay: `${index * 60}ms` }}
            className={`inline-block transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } ${wordClassName}`}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
