"use client";

import { useEffect } from "react";

function isReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeadingMotionDirector() {
  useEffect(() => {
    if (isReducedMotion()) return;

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#main-content h1:not([data-skip-heading-motion]), #main-content h2:not([data-skip-heading-motion])",
      ),
    ).filter((heading) => !heading.dataset.headingMotion);

    const observers: IntersectionObserver[] = [];

    const prepareTextNodes = (element: HTMLElement) => {
      const originalText = element.textContent?.replace(/\s+/g, " ").trim();
      if (!originalText) return;

      element.dataset.headingMotion = "prepared";
      element.setAttribute("aria-label", originalText);

      let characterIndex = 0;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      let node = walker.nextNode();

      while (node) {
        if (node.nodeValue?.trim()) textNodes.push(node as Text);
        node = walker.nextNode();
      }

      textNodes.forEach((textNode) => {
        const value = textNode.nodeValue ?? "";
        const fragment = document.createDocumentFragment();

        Array.from(value).forEach((character) => {
          const span = document.createElement("span");
          span.className = "heading-motion-char";
          span.style.setProperty("--heading-char-index", String(characterIndex));
          span.setAttribute("aria-hidden", "true");
          span.textContent = character === " " ? "\u00A0" : character;
          fragment.appendChild(span);
          characterIndex += 1;
        });

        textNode.replaceWith(fragment);
      });

      const visualChildren = Array.from(element.children);
      visualChildren.forEach((child) => child.setAttribute("aria-hidden", "true"));

      const caret = document.createElement("span");
      caret.className = "heading-motion-caret";
      caret.setAttribute("aria-hidden", "true");
      element.appendChild(caret);
    };

    headings.forEach((heading) => {
      prepareTextNodes(heading);

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
        { threshold: 0.22, rootMargin: "0px 0px -9% 0px" },
      );

      observer.observe(heading);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <style>{`
      [data-heading-motion="prepared"] .heading-motion-char {
        display: inline-block;
        opacity: 0;
        transform: translate3d(0, 0.5em, 0) scale(0.98);
        filter: blur(5px);
        transition:
          opacity 460ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
          filter 520ms cubic-bezier(0.22, 1, 0.36, 1);
        transition-delay: calc(var(--heading-char-index) * 13ms);
        will-change: opacity, transform, filter;
      }

      [data-heading-motion="revealed"] .heading-motion-char {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
        filter: blur(0);
      }

      .heading-motion-caret {
        display: inline-block;
        width: 0.11em;
        height: 0.9em;
        margin-left: 0.11em;
        vertical-align: -0.06em;
        border-radius: 999px;
        background: currentColor;
        opacity: 0;
      }

      [data-heading-motion="revealed"] .heading-motion-caret {
        animation: heading-motion-caret 960ms steps(1, end) 2.1s 3;
      }

      @keyframes heading-motion-caret {
        0%, 47% { opacity: 0; }
        48%, 100% { opacity: 0.82; }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-heading-motion="prepared"] .heading-motion-char {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }
      }
    `}</style>
  );
}
