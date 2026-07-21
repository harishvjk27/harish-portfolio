"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section > div, main header > div, main article",
      ),
    );

    let observer: IntersectionObserver | undefined;

    if (!reduceMotion.matches) {
      revealElements.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 85}ms`);
      });
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.08 },
      );
      revealElements.forEach((element) => observer?.observe(element));
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}
