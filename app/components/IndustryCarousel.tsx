"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type IndustrySlide = {
  title: string;
  text: string;
  image: string;
  href?: string;
};

type IndustryCarouselProps = {
  slides: IndustrySlide[];
};

export function IndustryCarousel({ slides }: IndustryCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const visibleSlides = useMemo(() => {
    return slides.map((_, offset) => slides[(active + offset) % slides.length]);
  }, [active, slides]);

  const advance = (direction: 1 | -1) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div className="industry-carousel">
      <div className="industry-carousel-track">
        {visibleSlides.slice(0, 4).map((slide, index) => (
          <Link
            className={`industry-slide-card ${index === 0 ? "is-featured" : ""}`}
            href={slide.href ?? "/industries"}
            key={`${slide.title}-${index}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 1024px) 82vw, 25vw"
              className="object-cover"
            />
            <span className="industry-slide-shade" />
            <span className="industry-slide-kicker">
              {String(((active + index) % slides.length) + 1).padStart(2, "0")}
            </span>
            <span className="industry-slide-copy">
              <strong>{slide.title}</strong>
              <span>{slide.text}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous industry"
            className="industry-carousel-button"
            onClick={() => advance(-1)}
            type="button"
          >
            <span aria-hidden>&lt;</span>
          </button>
          <button
            aria-label="Next industry"
            className="industry-carousel-button"
            onClick={() => advance(1)}
            type="button"
          >
            <span aria-hidden>&gt;</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              aria-label={`Show ${slide.title}`}
              className={`h-2.5 rounded-full transition-all ${
                active === index ? "w-8 bg-yellow-400" : "w-2.5 bg-slate-300"
              }`}
              key={slide.title}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
