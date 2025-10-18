import LogoSquare from "@/public/logo-square.png";
import Image from "next/image";

export default async function Footer() {
  return (
    <>
      <section className="footer-top">
        <figure className="footer-logo">
          <Image
            src={LogoSquare}
            alt="Wealthix Advisors"
            width={200}
            height={120}
            priority
          />
          <figcaption className="footer-logo-caption">
            Wealthix Advisors
          </figcaption>
        </figure>
        <ul className="footer-social-links">
          <li>
            <a href="#" className="footer-social-link">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0476 9.74781C19.0476 4.75353 14.9943 0.700195 10 0.700195C5.00573 0.700195 0.952393 4.75353 0.952393 9.74781C0.952393 14.1269 4.06477 17.7731 8.19049 18.6145V12.4621H6.38096V9.74781H8.19049V7.48591C8.19049 5.73972 9.61096 4.31924 11.3572 4.31924H13.6191V7.03353H11.8095C11.3119 7.03353 10.9048 7.44067 10.9048 7.93829V9.74781H13.6191V12.4621H10.9048V18.7502C15.4738 18.2978 19.0476 14.4435 19.0476 9.74781Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_16_461"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path
                    d="M0.742065 0.158203H19.9247V19.3408H0.742065V0.158203Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_16_461)">
                  <path
                    d="M15.8484 1.05664H18.7902L12.364 8.42003L19.9247 18.4416H14.0055L9.36602 12.3648L4.0634 18.4416H1.11887L7.99172 10.563L0.742065 1.05801H6.81199L10.9993 6.61138L15.8484 1.05664ZM14.8139 16.6768H16.4444L5.92137 2.72964H4.17301L14.8139 16.6768Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-link">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6666 0.75C17.1971 0.75 17.7058 0.960714 18.0808 1.33579C18.4559 1.71086 18.6666 2.21957 18.6666 2.75V16.75C18.6666 17.2804 18.4559 17.7891 18.0808 18.1642C17.7058 18.5393 17.1971 18.75 16.6666 18.75H2.66663C2.13619 18.75 1.62749 18.5393 1.25241 18.1642C0.87734 17.7891 0.666626 17.2804 0.666626 16.75V2.75C0.666626 2.21957 0.87734 1.71086 1.25241 1.33579C1.62749 0.960714 2.13619 0.75 2.66663 0.75H16.6666ZM16.1666 16.25V10.95C16.1666 10.0854 15.8232 9.2562 15.2118 8.64483C14.6004 8.03346 13.7712 7.69 12.9066 7.69C12.0566 7.69 11.0666 8.21 10.5866 8.99V7.88H7.79663V16.25H10.5866V11.32C10.5866 10.55 11.2066 9.92 11.9766 9.92C12.3479 9.92 12.704 10.0675 12.9666 10.3301C13.2291 10.5926 13.3766 10.9487 13.3766 11.32V16.25H16.1666ZM4.54663 6.31C4.99219 6.31 5.4195 6.133 5.73457 5.81794C6.04963 5.50288 6.22663 5.07556 6.22663 4.63C6.22663 3.7 5.47663 2.94 4.54663 2.94C4.09841 2.94 3.66855 3.11805 3.35162 3.43499C3.03468 3.75193 2.85663 4.18178 2.85663 4.63C2.85663 5.56 3.61663 6.31 4.54663 6.31ZM5.93663 16.25V7.88H3.16663V16.25H5.93663Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-link">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0.75C14.3261 0.75 15.5979 1.27678 16.5355 2.21447C17.4732 3.15215 18 4.42392 18 5.75V13.75C18 15.0761 17.4732 16.3479 16.5355 17.2855C15.5979 18.2232 14.3261 18.75 13 18.75H5C3.67392 18.75 2.40215 18.2232 1.46447 17.2855C0.526784 16.3479 0 15.0761 0 13.75V5.75C0 4.42392 0.526784 3.15215 1.46447 2.21447C2.40215 1.27678 3.67392 0.75 5 0.75H13ZM9 5.75C7.93913 5.75 6.92172 6.17143 6.17157 6.92157C5.42143 7.67172 5 8.68913 5 9.75C5 10.8109 5.42143 11.8283 6.17157 12.5784C6.92172 13.3286 7.93913 13.75 9 13.75C10.0609 13.75 11.0783 13.3286 11.8284 12.5784C12.5786 11.8283 13 10.8109 13 9.75C13 8.68913 12.5786 7.67172 11.8284 6.92157C11.0783 6.17143 10.0609 5.75 9 5.75ZM9 7.75C9.53043 7.75 10.0391 7.96071 10.4142 8.33579C10.7893 8.71086 11 9.21957 11 9.75C11 10.2804 10.7893 10.7891 10.4142 11.1642C10.0391 11.5393 9.53043 11.75 9 11.75C8.46957 11.75 7.96086 11.5393 7.58579 11.1642C7.21071 10.7891 7 10.2804 7 9.75C7 9.21957 7.21071 8.71086 7.58579 8.33579C7.96086 7.96071 8.46957 7.75 9 7.75ZM13.5 4.25C13.2348 4.25 12.9804 4.35536 12.7929 4.54289C12.6054 4.73043 12.5 4.98478 12.5 5.25C12.5 5.51522 12.6054 5.76957 12.7929 5.95711C12.9804 6.14464 13.2348 6.25 13.5 6.25C13.7652 6.25 14.0196 6.14464 14.2071 5.95711C14.3946 5.76957 14.5 5.51522 14.5 5.25C14.5 4.98478 14.3946 4.73043 14.2071 4.54289C14.0196 4.35536 13.7652 4.25 13.5 4.25Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-middle">
        <div className="footer-middle-left">
          <h2 className="invisible">Address and Contact Information</h2>
          <div className="footer-address">
            <h3>Address</h3>
            <address>
              Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial Centre
              Metro Station, Dubai, UAE.
            </address>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="footer-contact-block">
              <h4>Business Inquiries</h4>
              <address>
                <a
                  href="tel:+971504367430"
                  className="footer-contact-block-link"
                >
                  {" "}
                  +971 504367430
                </a>
                <a
                  href="mailto:info@wealthixadvisors.ae"
                  className="footer-contact-block-link"
                >
                  info@wealthixadvisors.ae
                </a>
              </address>
            </div>
            <div className="footer-contact-block">
              <h4>Reception</h4>
              <address>
                <a href="tel:+97142690673">+971 4 2690673</a>
              </address>
            </div>
            <div className="footer-contact-block">
              <h4>Customer Support / Complaints</h4>
              <address>
                <a href="tel:+97142690673">+971 504367430</a>
                <a href="mailto:support@wealthixadvisors.ae">
                  support@wealthixadvisors.ae
                </a>
              </address>
            </div>
            <div className="footer-contact-block">
              <h4>Working Hours</h4>
              <address>
                <p>Monday - Friday: 8:30 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </address>
            </div>
          </div>
        </div>
        <div className="footer-middle-right">
          <h2>Services</h2>
          <ul className="footer-services">
            <li>
              <a href="#" className="footer-services-link">
                Corporate Tax Services
              </a>
            </li>
            <li>
              <a href="#" className="footer-services-link">
                VAT Registration & Filing
              </a>
            </li>
            <li>
              <a href="#" className="footer-services-link">
                Accounting & Bookkeeping
              </a>
            </li>
            <li>
              <a href="#" className="footer-services-link">
                Auditing Services
              </a>
            </li>
            <li>
              <a href="#" className="footer-services-link">
                Compliance Advisory
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="footer-bottom">
        <h2 className="invisible">Copyright and Links</h2>
        <p className="footer-copyright">
          Copyright © 2025 Wealthix Advisors. All Rights Reserved
        </p>
        <nav className="footer-nav">
          <ul className="footer-nav-links">
            <li>
              <a href="#" className="footer-nav-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-nav-link">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-nav-link">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer-nav-link">
                Company Profile
              </a>
            </li>
            <li>
              <a href="#" className="footer-nav-link">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="footer-nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
