"use client";

import { useEffect } from "react";

export function HeadingMotionDirector() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#main-content h1:not([data-skip-heading-motion]), #main-content h2:not([data-skip-heading-motion])",
      ),
    ).filter((heading) => !heading.dataset.headingMotion);

    const observers: IntersectionObserver[] = [];

    headings.forEach((heading, index) => {
      heading.dataset.headingMotion = "prepared";
      heading.style.setProperty("--heading-reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);

      const reveal = () => {
        window.requestAnimationFrame(() => {
          heading.dataset.headingMotion = "revealed";
        });
      };

      if (!("IntersectionObserver" in window)) {
        reveal();
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
      );

      observer.observe(heading);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <style>{`
      [data-heading-motion="prepared"] {
        opacity: 0;
        transform: translate3d(0, 0.55em, 0);
        filter: blur(7px);
        clip-path: inset(0 0 100% 0);
        transition:
          opacity 580ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 760ms cubic-bezier(0.22, 1, 0.36, 1),
          filter 640ms cubic-bezier(0.22, 1, 0.36, 1),
          clip-path 820ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: var(--heading-reveal-delay, 0ms);
        will-change: opacity, transform, filter, clip-path;
      }

      [data-heading-motion="revealed"] {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        filter: blur(0);
        clip-path: inset(0 0 0 0);
      }

      [data-heading-motion="revealed"]::after {
        content: "";
        display: block;
        width: min(5.25rem, 24%);
        height: 1px;
        margin-top: 0.36em;
        background: linear-gradient(90deg, currentColor 0%, currentColor 30%, transparent 100%);
        opacity: 0.24;
        transform-origin: left;
        animation: heading-rule-reveal 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        animation-delay: calc(var(--heading-reveal-delay, 0ms) + 280ms);
      }

      @keyframes heading-rule-reveal {
        from { transform: scaleX(0); opacity: 0; }
        to { transform: scaleX(1); opacity: 0.24; }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-heading-motion="prepared"] {
          opacity: 1;
          transform: none;
          filter: none;
          clip-path: none;
          transition: none;
        }
      }
    `}</style>
  );
}
