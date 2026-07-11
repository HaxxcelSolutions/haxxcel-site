"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  rating: string;
  quote: string;
  author: string;
  title: string;
  location: string;
};

type TestimonialsSliderProps = {
  testimonials: Testimonial[];
  interval?: number;
};

export default function TestimonialsSlider({
  testimonials,
  interval = 5000,
}: TestimonialsSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count, interval]);

  if (count === 0) return null;

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-blue-400/30 bg-slate-950/60 text-blue-200 backdrop-blur transition hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-white sm:grid"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={`${item.author}-${item.title}`}
                className="w-full shrink-0 px-1"
                aria-hidden={testimonials[active] !== item}
              >
                <blockquote className="relative mx-auto flex h-full max-w-3xl flex-col items-center rounded-3xl card-cream p-8 text-center shadow-2xl shadow-blue-950/20 sm:p-12">
                  <Quote className="h-9 w-9 text-blue-400/40" aria-hidden="true" />
                  <p className="mt-5 text-xl font-semibold tracking-wide" style={{ color: "#f5b301" }}>
                    {item.rating}
                  </p>
                  <p className="mt-5 text-lg leading-9 text-slate-200 sm:text-xl">
                    “{item.quote}”
                  </p>
                  <footer className="mt-8">
                    <span className="block text-base font-semibold text-[#111844]">{item.author}</span>
                    <span className="mt-1 block text-sm text-slate-400">
                      {item.title}
                      {item.location ? ` • ${item.location}` : ""}
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-blue-400/30 bg-slate-950/60 text-blue-200 backdrop-blur transition hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-white sm:grid"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-blue-400/30 bg-slate-950/60 text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-white sm:hidden"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          {testimonials.map((item, index) => (
            <button
              key={`dot-${item.author}-${item.title}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === active}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-7 bg-blue-400"
                  : "w-2.5 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-blue-400/30 bg-slate-950/60 text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-white sm:hidden"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
