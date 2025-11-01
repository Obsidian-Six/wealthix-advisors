"use client";

import { useEffect, useRef, useState } from "react";
import ServicesForm from "@/app/_components/services/services-form";

export default function EInvoicingAssistance() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus first focusable in dialog after frame
      requestAnimationFrame(() => {
        const first = dialogRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        first?.focus();
      });
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Get E-Invoicing Assistance
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_61_126)">
            <path
              d="M3.61619 2.045C3.38185 2.27941 3.25021 2.59729 3.25021 2.92875C3.25021 3.2602 3.38185 3.57809 3.61619 3.8125L9.80369 10L3.61619 16.1875C3.38849 16.4233 3.2625 16.739 3.26535 17.0668C3.2682 17.3945 3.39966 17.708 3.63142 17.9398C3.86318 18.1715 4.17669 18.303 4.50444 18.3058C4.83218 18.3087 5.14794 18.1827 5.38369 17.955L12.4549 10.8837C12.6893 10.6493 12.8209 10.3315 12.8209 10C12.8209 9.66854 12.6893 9.35066 12.4549 9.11625L5.38369 2.045C5.14928 1.81066 4.8314 1.67902 4.49994 1.67902C4.16848 1.67902 3.8506 1.81066 3.61619 2.045Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_61_126">
              <rect
                width="20"
                height="14"
                fill="white"
                transform="matrix(0 1 -1 0 14 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      {open && (
        <div className="modal-overlay" onClick={onOverlayClick}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="E-Invoicing Assistance"
          >
            <div className="modal-card modal-form" ref={dialogRef}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-black text-base md:text-2xl font-bold font-inter">
                  Get E-Invoicing Assistance
                </h3>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-primary-10 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4L16 16"
                      stroke="#080808"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 4L4 16"
                      stroke="#080808"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <ServicesForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
