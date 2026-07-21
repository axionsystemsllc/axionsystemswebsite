"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectSlideshowProps = {
  images: string[];
  title: string;
};

export function ProjectSlideshow({ images, title }: ProjectSlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, [images.length]);

  const currentImage = images[active] ?? images[0];

  return (
    <div>
      <button
        aria-label={`Advance ${title} image gallery`}
        className="group relative block min-h-[340px] w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 text-left shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:min-h-[430px]"
        onClick={() => setActive((current) => (current + 1) % images.length)}
        type="button"
      >
        <Image
          src={currentImage}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        {images.length > 1 ? (
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-sm backdrop-blur">
            {active + 1} / {images.length}
          </span>
        ) : null}
      </button>

      {images.length > 1 ? (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              aria-label={`Show ${title} image ${index + 1}`}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border bg-slate-100 transition duration-300 hover:scale-[1.04] ${
                active === index
                  ? "border-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.18)]"
                  : "border-slate-200 opacity-70 hover:opacity-100"
              }`}
              key={image}
              onClick={() => setActive(index)}
              type="button"
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
