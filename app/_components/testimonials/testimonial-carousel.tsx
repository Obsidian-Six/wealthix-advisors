"use client";

import { useEffect } from "react";

export default function TestimonialCarousel() {
  useEffect(() => {
    const carousel = document.getElementById("testimonial-carousel");
    if (!carousel) return;

    const firstCard = carousel.querySelector("li");
    if (!firstCard) return;

    const style = getComputedStyle(firstCard);
    const scrollAmount = firstCard.clientWidth;

    const scroll = (dir: "left" | "right") => {
      const width = carousel.clientWidth;
      carousel.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    };

    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const direction = button.getAttribute("data-dir") as "left" | "right";
      scroll(direction);
    };

    const buttons = document.querySelectorAll("[data-dir]");
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <div className="testimonial-carousel">
      <button
        type="button"
        className="testimonial-carousel-control testimonial-carousel-control-left"
        data-dir="left"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_417)">
            <path
              d="M9.23628 16.6765C8.95538 16.9578 8.7976 17.339 8.7976 17.7365C8.7976 18.134 8.95538 18.5153 9.23628 18.7965L14.8923 24.4555C15.1737 24.7369 15.5553 24.895 15.9533 24.895C16.3512 24.895 16.7329 24.7369 17.0143 24.4555C17.2957 24.1741 17.4538 23.7925 17.4538 23.3945C17.4538 22.9966 17.2957 22.6149 17.0143 22.3335L13.9183 19.2365L25.4533 19.2365C25.8511 19.2365 26.2326 19.0785 26.5139 18.7972C26.7952 18.5159 26.9533 18.1344 26.9533 17.7365C26.9533 17.3387 26.7952 16.9572 26.5139 16.6759C26.2326 16.3946 25.8511 16.2365 25.4533 16.2365L13.9183 16.2365L17.0143 13.1405C17.1536 13.0012 17.2641 12.8358 17.3395 12.6537C17.4149 12.4717 17.4538 12.2766 17.4538 12.0795C17.4538 11.8825 17.4149 11.6874 17.3395 11.5053C17.2641 11.3233 17.1536 11.1579 17.0143 11.0185C16.8749 10.8792 16.7095 10.7687 16.5275 10.6933C16.3454 10.6179 16.1503 10.5791 15.9533 10.5791C15.7562 10.5791 15.5611 10.6179 15.3791 10.6933C15.197 10.7687 15.0316 10.8792 14.8923 11.0185L9.23628 16.6765Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_417">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(17.9065 0.765625) rotate(44.8421)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        type="button"
        className="testimonial-carousel-control testimonial-carousel-control-right"
        data-dir="right"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_423)">
            <path
              d="M25.7637 16.6765C26.0446 16.9578 26.2024 17.339 26.2024 17.7365C26.2024 18.134 26.0446 18.5153 25.7637 18.7965L20.1077 24.4555C19.8263 24.7369 19.4447 24.895 19.0467 24.895C18.6488 24.895 18.2671 24.7369 17.9857 24.4555C17.7043 24.1741 17.5462 23.7925 17.5462 23.3945C17.5462 22.9966 17.7043 22.6149 17.9857 22.3335L21.0817 19.2365L9.54671 19.2365C9.14889 19.2365 8.76736 19.0785 8.48605 18.7972C8.20475 18.5159 8.04671 18.1344 8.04671 17.7365C8.04671 17.3387 8.20475 16.9572 8.48605 16.6759C8.76736 16.3946 9.14889 16.2365 9.54671 16.2365L21.0817 16.2365L17.9857 13.1405C17.8464 13.0012 17.7359 12.8358 17.6605 12.6537C17.585 12.4717 17.5462 12.2766 17.5462 12.0795C17.5462 11.8825 17.585 11.6874 17.6605 11.5053C17.7359 11.3233 17.8464 11.1579 17.9857 11.0185C18.125 10.8792 18.2905 10.7687 18.4725 10.6933C18.6546 10.6179 18.8497 10.5791 19.0467 10.5791C19.2438 10.5791 19.4389 10.6179 19.6209 10.6933C19.803 10.7687 19.9684 10.8792 20.1077 11.0185L25.7637 16.6765Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_423">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(-0.709053 0.705155 0.705155 0.709053 17.0935 0.765625)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
