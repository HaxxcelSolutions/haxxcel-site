"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, X, ZoomIn } from "lucide-react";

type PortfolioGalleryProps = {
  title: string;
  images: string[];
};

export default function PortfolioGallery({ title, images }: PortfolioGalleryProps) {
  const thumbnails = images.slice(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const isOpen = openIndex !== null;

  const close = useCallback(() => {
    setOpenIndex(null);
    setScale(1);
  }, []);

  const next = useCallback(() => {
    setScale(1);
    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setScale(1);
    setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Screenshots</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {thumbnails.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setScale(1);
              setOpenIndex(index + 1);
            }}
            aria-label={`Open ${title} screenshot ${index + 2}`}
            className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 ring-1 ring-white/5 transition duration-300 hover:border-white/20 hover:ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 2}`}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950/70 text-white ring-1 ring-white/20">
                <ZoomIn className="h-5 w-5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.max(1, s - 0.25));
              }}
              aria-label="Zoom out"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-slate-900/70 text-slate-200 transition hover:bg-slate-800/80"
            >
              <Minus className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.min(3, s + 0.25));
              }}
              aria-label="Zoom in"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-slate-900/70 text-slate-200 transition hover:bg-slate-800/80"
            >
              <Plus className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-slate-900/70 text-slate-200 transition hover:bg-slate-800/80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 z-10 grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-slate-900/70 text-slate-200 transition hover:bg-slate-800/80 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure className="mx-auto flex max-h-[85vh] max-w-[92vw] flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[openIndex]}
              alt={`${title} screenshot ${openIndex + 1}`}
              onClick={() => setScale((s) => (s > 1 ? 1 : 2))}
              style={{ transform: `scale(${scale})` }}
              className={`max-h-[80vh] max-w-[92vw] rounded-2xl border border-white/10 object-contain shadow-2xl transition-transform duration-200 ease-out ${
                scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
            />
            <figcaption className="mt-3 text-center text-xs text-slate-400 md:text-sm">
              {title} — {openIndex + 1} / {images.length}
            </figcaption>
          </figure>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 z-10 grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-slate-900/70 text-slate-200 transition hover:bg-slate-800/80 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
