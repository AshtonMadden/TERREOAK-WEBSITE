"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Background video. Nothing is downloaded until the page has finished loading and the video is
 * about to scroll into view, and it pauses again when it leaves. Phones get a smaller file
 * (the same name ending in -mobile). Pass `lazyPoster` for videos further down the page so even
 * the still image waits until it is needed.
 */
export function HeroVideo({ src, poster, lazyPoster = false }: { src: string; poster: string; lazyPoster?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;
    const start = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!video.poster) video.poster = poster;
            if (!still) video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(video);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      observer?.disconnect();
    };
  }, [poster]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={lazyPoster ? undefined : poster}
      aria-hidden="true"
      className="h-full w-full object-cover"
    >
      <source src={src.replace(/\.mp4$/, "-mobile.mp4")} type="video/mp4" media="(max-width: 767px)" />
      <source src={src} type="video/mp4" />
    </video>
  );
}

/** Counts up to a number the first time it scrolls into view. Shows the final value without JS. */
export function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          setValue(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setValue(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
