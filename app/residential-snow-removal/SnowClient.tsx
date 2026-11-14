"use client";

import { useEffect, useRef, useState } from "react";

/** Background hero video. Starts playback from JS because browsers ignore autoplay on some hydrated videos. */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={poster} aria-hidden="true" className="h-full w-full object-cover">
      <source src={src} type="video/mp4" />
    </video>
  );
}

/** Counts up to a number the first time it scrolls into view. Renders the final value without JS. */
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
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
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

/** Floating sign-up button that appears after the hero and hides once the form is on screen. */
export function StickyCta({ targetId, label }: { targetId: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById(targetId);
      const rect = form?.getBoundingClientRect();
      const formOnScreen = !!rect && rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      setVisible(window.scrollY > 600 && !formOnScreen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);

  if (!visible || dismissed) return null;

  return (
    <div className="animate-float-up fixed inset-x-0 bottom-5 z-50 mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-panel/90 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <a href={`#${targetId}`} className="to-btn to-btn-primary to-btn-sm">
        {label}
      </a>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="to-focus flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
