"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroHighlights({
  items,
  intervalMs = 6000,
  animationMs = 700,
}: {
  items: string[];
  intervalMs?: number;
  animationMs?: number;
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number>(-1);
  const [paused, setPaused] = useState(false);
  const clearPrevTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (safeItems.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      setPrevIndex((p) => (p === -1 ? index : p));
      setIndex((i) => (i + 1) % safeItems.length);
      // Clear previous after animation completes
      if (clearPrevTimeout.current) {
        window.clearTimeout(clearPrevTimeout.current);
      }
      clearPrevTimeout.current = window.setTimeout(() => {
        setPrevIndex(-1);
      }, animationMs + 50);
    }, Math.max(2500, intervalMs));
    return () => window.clearInterval(id);
  }, [safeItems.length, intervalMs, animationMs, paused, index]);

  useEffect(
    () => () => {
      if (clearPrevTimeout.current)
        window.clearTimeout(clearPrevTimeout.current);
    },
    []
  );

  if (safeItems.length === 0) return null;

  return (
    <ul
      className="hero-right-highlights"
      aria-live="polite"
      aria-atomic="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {prevIndex >= 0 && (
        <li key={`prev-${prevIndex}`} className="hero-highlight hero-slide-out">
          {safeItems[prevIndex]}
        </li>
      )}
      <li key={`curr-${index}`} className="hero-highlight hero-slide-in">
        {safeItems[index]}
      </li>
    </ul>
  );
}
