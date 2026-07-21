"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ProjectRevealProps = {
  children: ReactNode;
  className: string;
  direction: "left" | "right";
};

export function ProjectReveal({
  children,
  className,
  direction,
}: ProjectRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenOffset =
    direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <article
      className={`${className} transition-all duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenOffset} translate-y-8 opacity-0`
      }`}
      ref={ref}
    >
      {children}
    </article>
  );
}
