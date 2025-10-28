"use client";
import { useEffect } from "react";

export default function CtaAction() {
  useEffect(() => {
    const buttons = document.querySelectorAll("button.cta-action");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const url = "https://calendly.com/neetujainca/caneetujain";
        window.open(url, "_blank", "noopener,noreferrer");
      });
    });
  }, []);
  return null;
}
