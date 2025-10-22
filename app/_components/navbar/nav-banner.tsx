import Link from "next/link";

export default async function NavBanner() {
  return (
    <div className="nav-banner">
      <div className="nav-banner-container">
        <Link
          href={"https://www.google.com/maps?q=Dubai%2C%20UAE"}
          className="nav-banner-link"
          aria-label="View location: Dubai, UAE"
        >
          Dubai, UAE
        </Link>
        <Link
          href={"tel:+971527941604"}
          className="nav-banner-link"
          aria-label="Call us at +971 52 794 1604"
        >
          +971 52 794 1604
        </Link>
        <Link
          href={"mailto:info@wealthixadvisors.com"}
          className="nav-banner-link"
          aria-label="Email us at info@wealthixadvisors.com"
        >
          info@wealthixadvisors.com
        </Link>
      </div>
    </div>
  );
}
