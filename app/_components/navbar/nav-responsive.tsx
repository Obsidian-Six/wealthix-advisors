"use client";

import { useEffect } from "react";

export default function NavResponsive() {
  useEffect(() => {
    const nav = document.querySelector('nav[aria-label="Primary"]');
    const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const menu = document.getElementById("primary-menu");
    const overlay = document.querySelector<HTMLElement>(".nav-overlay");

    if (!nav || !toggle || !menu) return;

    const positionOverlay = () => {
      if (!overlay) return;
      const header = document.querySelector<HTMLElement>("header");
      const banner = document.querySelector<HTMLElement>(".nav-banner");
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const bannerBottom = banner?.getBoundingClientRect().bottom ?? 0;
      const top = Math.max(headerBottom, bannerBottom, 0);
      overlay.style.top = `${top}px`;
      overlay.style.left = "0";
      overlay.style.right = "0";
      overlay.style.bottom = "0";
    };

    const open = () => {
      nav.setAttribute("data-opened", "true");
      toggle.setAttribute("aria-expanded", "true");
      positionOverlay();
    };
    const close = () => {
      nav.setAttribute("data-opened", "false");
      toggle.setAttribute("aria-expanded", "false");
    };
    const isOpen = () => nav.getAttribute("data-opened") === "true";

    const onToggleClick = (e: Event) => {
      e.preventDefault();
      if (isOpen()) {
        close();
      } else {
        open();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen()) {
        close();
        toggle.focus();
      }
    };

    const onMenuClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) {
        // Close after navigating on mobile
        close();
      }
    };

    const onOverlayClick = () => {
      if (isOpen()) close();
    };

    const onResize = () => {
      // Ensure menu closes when resizing to md+ to avoid stale overlay
      if (window.matchMedia("(min-width: 768px)").matches && isOpen()) {
        close();
      }
      if (isOpen()) positionOverlay();
    };

    toggle.addEventListener("click", onToggleClick);
    document.addEventListener("keydown", onKeyDown);
    menu.addEventListener("click", onMenuClick);
    overlay?.addEventListener("click", onOverlayClick);
    window.addEventListener("resize", onResize);

    return () => {
      toggle.removeEventListener("click", onToggleClick);
      document.removeEventListener("keydown", onKeyDown);
      menu.removeEventListener("click", onMenuClick);
      overlay?.removeEventListener("click", onOverlayClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
