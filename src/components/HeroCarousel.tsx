"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  interval?: number;
  children: React.ReactNode;
}

export default function HeroCarousel({
  slides,
  interval = 6000,
  children,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative w-full">{children}</div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-accent"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
