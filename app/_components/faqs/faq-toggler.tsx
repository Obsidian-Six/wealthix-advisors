"use client";

import { useEffect } from "react";

export default function FAQToggler() {
  useEffect(() => {
    const faqCards = document.querySelectorAll(".faq-card");
    faqCards.forEach((card) => {
      card.addEventListener("click", () => {
        const isOpened = card.getAttribute("data-opened") === "true";
        card.setAttribute("data-opened", isOpened ? "false" : "true");
      });
    });
  }, []);
  return null;
}
