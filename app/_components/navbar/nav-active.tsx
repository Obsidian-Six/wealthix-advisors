"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * NavActive
 * Client helper that watches the current route and toggles the `active` class
 * on the matching nav link. It also sets `aria-current="page"` for a11y.
 *
 * Contract:
 * - Inputs: none (uses router state)
 * - Side effects: Adds/removes `.active` on anchors with known IDs inside the primary nav
 * - Error modes: No-op if nav or link not found
 */
export default function NavActive() {
  const pathname = usePathname();
  const prevActiveIdRef = useRef<string | null>(null);

  useEffect(() => {
    const routeToId: Record<string, string> = {
      "/": "nav-link-home",
      "/home": "nav-link-home",
      "/services": "nav-link-services",
      "/packages": "nav-link-packages",
      "/about-us": "nav-link-about-us",
      "/blogs": "nav-link-blogs",
      "/contact": "nav-link-contact",
    };

    const normalize = (p: string | null): string => {
      if (!p) return "/";
      // strip query/hash and trailing slashes
      const base = p.split(/[?#]/)[0] || "/";
      return base.length > 1 && base.endsWith("/") ? base.slice(0, -1) : base;
    };

    const current = normalize(pathname);
    const targetId = routeToId[current];

    const nav = document.querySelector('nav[aria-label="Primary"]');
    if (!nav) return;

    // Clear any existing active classes to keep a single-active invariant
    nav.querySelectorAll("ul#primary-menu a.active").forEach((a) => {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    });

    if (!targetId) {
      prevActiveIdRef.current = null;
      return;
    }

    const el = nav.querySelector<HTMLAnchorElement>(`#${CSS.escape(targetId)}`);
    if (el) {
      el.classList.add("active");
      el.setAttribute("aria-current", "page");
      prevActiveIdRef.current = targetId;
    } else {
      prevActiveIdRef.current = null;
    }
  }, [pathname]);

  return null;
}
