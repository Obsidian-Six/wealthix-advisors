import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={221} height={48} priority />
      </Link>
      <ul>
        <li>
          <Link href={"/#home"}>Home</Link>
        </li>
        <li>
          <Link href={"/#services"}>Services</Link>
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
    </nav>
  );
}
