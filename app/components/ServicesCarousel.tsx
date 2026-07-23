"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ServiceSlide = {
  title: string;
  text: string;
  image: string;
  href: string;
};

type ServicesCarouselProps = {
  slides: ServiceSlide[];
};

export function ServicesCarousel({ slides }: ServicesCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4300);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const visibleSlides = useMemo(() => {
    return slides.map((_, offset) => slides[(active + offset) % slides.length]);
  }, [active, slides]);

  const advance = (direction: 1 | -1) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div className="services-carousel">
      <div className="services-carousel-track">
        {visibleSlides.slice(0, 4).map((slide, index) => (
          <Link
            className={`services-slide-card ${index === 0 ? "is-featured" : ""}`}
            href={slide.href}
            key={`${slide.title}-${index}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 1024px) 86vw, 25vw"
              className="object-cover"
            />
            <span className="services-slide-shade" />
            <span className="services-slide-copy">
              <strong>{slide.title}</strong>
              <span>{slide.text}</span>
            </span>
            <span className="services-slide-arrow" aria-hidden>
              &gt;
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous service"
            className="industry-carousel-button"
            onClick={() => advance(-1)}
            type="button"
          >
            <span aria-hidden>&lt;</span>
          </button>
          <button
            aria-label="Next service"
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
                active === index ? "w-8 bg-yellow-400" : "w-2.5 bg-white/28"
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
