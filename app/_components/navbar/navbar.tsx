import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import NavResponsive from "./nav-responsive";
import NavActive from "./nav-active";

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
          <Link id="nav-link-home" href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="M432-288h96v-96h96v-96h-96v-96h-96v96h-96v96h96v96ZM192-144v-456l288-216 288 216v456H192Zm72-72h432v-348L480-726 264-564v348Zm216-255Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link id="nav-link-services" href={"/services"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="M456-144v-240h72v84h288v72H528v84h-72Zm-312-84v-72h240v72H144Zm144-132v-84H144v-72h144v-84h72v240h-72Zm144-84v-72h384v72H432Zm144-132v-240h72v84h168v72H648v84h-72Zm-432-84v-72h384v72H144Z" />
            </svg>
            Services
          </Link>
        </li>
        <li>
          <Link id="nav-link-packages" href={"/packages"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="m408-549 72-36 72 36v-195H408v195ZM288-288v-72h192v72H288Zm-72 144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-600v528-528Zm0 528h528v-528H624v312l-144-72-144 72v-312H216v528Z" />
            </svg>
            Packages
          </Link>
        </li>
        <li>
          <Link id="nav-link-about-us" href={"/about-us"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="M480-240q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-36-153h73q0-37 6.5-52.5T555-485q35-34 48.5-58t13.5-53q0-55-37.5-89.5T484-720q-51 0-88.5 27T343-620l65 27q9-28 28.5-43.5T482-652q28 0 46 16t18 42q0 23-15.5 41T496-518q-35 32-43.5 52.5T444-393Zm36 297q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
            </svg>
            About Us
          </Link>
        </li>
        <li>
          <Link id="nav-link-blogs" href={"/blogs"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="M444-246v-454q-42-22-87-33t-93.22-11q-36.94 0-73.36 6.5T120-716v452q35-13 70.81-18.5Q226.63-288 264-288q47.35 0 92.17 12Q401-264 444-246Zm36 102q-49-32-103-52t-113-20q-38 0-76 7.5T115-186q-24 10-45.5-3.53T48-229v-503q0-14 7.5-26T76-776q45-20 91.9-30 46.91-10 95.68-10Q333-816 384-802.5T492-760q11 6 17.5 16.5T516-720v474q43-20 87.83-31 44.82-11 92.17-11 37 0 73.5 5t70.5 19v-529q11 4 22.13 7.9 11.13 3.9 21.87 9.1 13 6 21 18t8 26v503q0 25-15.5 40t-32.5 7q-40-18-82.48-26-42.47-8-86.52-8-59 0-113 20t-103 52Zm144-240v-432l120-48v432l-120 48ZM282-495Z" />
            </svg>
            Blogs
          </Link>
        </li>
        <li>
          <Link id="nav-link-contact" href={"/contact"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#080808"
            >
              <path d="M432-144v-72h312v-267q0-110-76.78-187.5t-187-77.5Q370-748 293-670.5T216-483v227h-48q-29.7 0-50.85-21.74Q96-299.48 96-330v-74q0-23 13-41t35-23l3-51q9-63 38-117.5t73.5-94.5q44.5-40 101.49-62.5 56.99-22.5 120-22.5t119.81 22.56q56.81 22.55 101.5 62.5Q746-691 775-637t38 117l3 52q21 5 34.5 21.5T864-408v84q0 22-13.5 38.5T816-264v48q0 29.7-21.15 50.85Q773.7-144 744-144H432Zm-59.79-264q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm216 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5ZM265-458q-9-97 55.7-167.5T482-696q82 0 142.5 55T694-504q-85 0-154.5-46.5T432-672q-14 71-57.5 127.5T265-458Z" />
            </svg>
            Contact Us
          </Link>
        </li>
      </ul>
      {/* Client helper to handle responsive toggling via data-opened */}
      <NavResponsive />
      {/* Client helper to set active link based on route */}
      <NavActive />
      {/* Overlay for mobile when menu is open; click to close */}
      <div className="nav-overlay" aria-hidden="true" />
    </nav>
  );
}
