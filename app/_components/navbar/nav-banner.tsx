import Link from "next/link";

export default async function NavBanner() {
  return (
    <div className="nav-banner">
      <div className="nav-banner-container">
        <Link href={"#"} className="nav-banner-link">
          Dubai, UAE
        </Link>
        <Link href={"#"} className="nav-banner-link">
          +971527941604
        </Link>
        <Link href={"#"} className="nav-banner-link">
          info@wealthixadvisors.com
        </Link>
      </div>
    </div>
  );
}
