import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import NavResponsive from "./nav-responsive";

export default function Navbar() {
  return (
    <nav aria-label="Primary" data-opened="false">
      <Link href="/" aria-label="Wealthix Advisors Home">
        <Image
          src={Logo}
          alt="Wealthix Advisors"
          width={221}
          height={48}
          priority
        />
      </Link>
      {/* Mobile menu toggle (visible on small screens) */}
      <button
        type="button"
        className="nav-toggle"
        aria-controls="primary-menu"
        aria-expanded="false"
        aria-label="Toggle navigation menu"
      >
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="0" y="0" width="28" height="2" fill="#080808" />
          <rect x="0" y="9" width="28" height="2" fill="#080808" />
          <rect x="0" y="18" width="28" height="2" fill="#080808" />
        </svg>
      </button>
      <ul id="primary-menu">
        <li>
          <Link href={"/#home"}>Home</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/packages"}>Packages</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/#faqs"}>FAQs</Link>
        </li>
        <li>
          <Link href={"/#contact"}>Contact Us</Link>
        </li>
      </ul>
      {/* Client helper to handle responsive toggling via data-opened */}
      <NavResponsive />
      {/* Overlay for mobile when menu is open; click to close */}
      <div className="nav-overlay" aria-hidden="true" />
    </nav>
  );
}
