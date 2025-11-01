import ServicesForm from "@/app/_components/services/services-form";
import Image from "next/image";
import ContactForm from "../contact-form/contact-form";

export default async function Details() {
  return (
    <section className="contact-details">
      <div className="contact-address">
        <div className="contact-address-card">
          <div className="contact-icon">
            <Image
              src={"/icons/address-blue.svg"}
              alt="Location Icon"
              width={24}
              height={24}
            />
          </div>
          <h3>Address</h3>
          <address>
            <p>
              UAE <br />
              Level 12, Rolex Tower, Sheikh Zayed Road,
              <br /> Near Financial Centre Metro Station, Dubai, UAE.
            </p>
            <p>
              India <br />
              Office No 108, Ist Floor, Pink City Tower-2, Jaipur, Rajasthan
            </p>
          </address>
        </div>
        <div className="contact-address-card">
          <div className="contact-icon">
            <Image
              src={"/icons/clock-blue.svg"}
              alt="Clock Icon"
              width={24}
              height={24}
            />
          </div>
          <h3>Working Hours</h3>
          <address>
            <p>Mon - Fri: 9:00AM - 6:00PM</p>
            <p>Sat - Sun: Closed</p>
          </address>
        </div>
        <div className="contact-address-card">
          <div className="contact-icon">
            <Image
              src={"/icons/phone-blue.svg"}
              alt="Phone Icon"
              width={24}
              height={24}
            />
          </div>
          <h3>Phone</h3>
          <address>
            <p>+971 52 794 1604</p>
          </address>
        </div>
        <div className="contact-address-card">
          <div className="contact-icon">
            <Image
              src={"/icons/mail-blue.svg"}
              alt="Email Icon"
              width={24}
              height={24}
            />
          </div>
          <h3>Email</h3>
          <address>
            <p>info@wealthixadvisors.com</p>
          </address>
        </div>
        <div className="contact-address-card">
          <div className="contact-icon">
            <Image
              src={"/icons/whatsapp-blue.svg"}
              alt="WhatsApp Icon"
              width={24}
              height={24}
            />
          </div>
          <h3>WhatsApp</h3>
          <address>
            <p>+971 52 794 1604</p>
          </address>
        </div>
        <div className="divider"></div>
        <ul className="contact-social-links">
          <li>
            <a
              href="http://www.youtube.com/@wealthixadvisors"
              target="_blank"
              className="footer-social-link"
            >
              <svg
                fill="#080808"
                height="32px"
                width="32px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-271 311.2 256 179.8"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z" />{" "}
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/build-relation/newsletter-follow?entityUrn=7298946770057752576"
              target="_blank"
              className="footer-social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#080808"
              >
                <path d="M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-528q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v528q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-528H168v528Zm72-96h480v-72H240v72Zm0-144h168v-216H240v216Zm240 0h240v-72H480v72Zm0-144h240v-72H480v72ZM168-216v-528 528Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/company/wealthixadvisors"
              target="_blank"
              className="footer-social-link"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6666 0.75C17.1971 0.75 17.7058 0.960714 18.0808 1.33579C18.4559 1.71086 18.6666 2.21957 18.6666 2.75V16.75C18.6666 17.2804 18.4559 17.7891 18.0808 18.1642C17.7058 18.5393 17.1971 18.75 16.6666 18.75H2.66663C2.13619 18.75 1.62749 18.5393 1.25241 18.1642C0.87734 17.7891 0.666626 17.2804 0.666626 16.75V2.75C0.666626 2.21957 0.87734 1.71086 1.25241 1.33579C1.62749 0.960714 2.13619 0.75 2.66663 0.75H16.6666ZM16.1666 16.25V10.95C16.1666 10.0854 15.8232 9.2562 15.2118 8.64483C14.6004 8.03346 13.7712 7.69 12.9066 7.69C12.0566 7.69 11.0666 8.21 10.5866 8.99V7.88H7.79663V16.25H10.5866V11.32C10.5866 10.55 11.2066 9.92 11.9766 9.92C12.3479 9.92 12.704 10.0675 12.9666 10.3301C13.2291 10.5926 13.3766 10.9487 13.3766 11.32V16.25H16.1666ZM4.54663 6.31C4.99219 6.31 5.4195 6.133 5.73457 5.81794C6.04963 5.50288 6.22663 5.07556 6.22663 4.63C6.22663 3.7 5.47663 2.94 4.54663 2.94C4.09841 2.94 3.66855 3.11805 3.35162 3.43499C3.03468 3.75193 2.85663 4.18178 2.85663 4.63C2.85663 5.56 3.61663 6.31 4.54663 6.31ZM5.93663 16.25V7.88H3.16663V16.25H5.93663Z"
                  fill="#080808"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/wealthixadvisors"
              target="_blank"
              className="footer-social-link"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0.75C14.3261 0.75 15.5979 1.27678 16.5355 2.21447C17.4732 3.15215 18 4.42392 18 5.75V13.75C18 15.0761 17.4732 16.3479 16.5355 17.2855C15.5979 18.2232 14.3261 18.75 13 18.75H5C3.67392 18.75 2.40215 18.2232 1.46447 17.2855C0.526784 16.3479 0 15.0761 0 13.75V5.75C0 4.42392 0.526784 3.15215 1.46447 2.21447C2.40215 1.27678 3.67392 0.75 5 0.75H13ZM9 5.75C7.93913 5.75 6.92172 6.17143 6.17157 6.92157C5.42143 7.67172 5 8.68913 5 9.75C5 10.8109 5.42143 11.8283 6.17157 12.5784C6.92172 13.3286 7.93913 13.75 9 13.75C10.0609 13.75 11.0783 13.3286 11.8284 12.5784C12.5786 11.8283 13 10.8109 13 9.75C13 8.68913 12.5786 7.67172 11.8284 6.92157C11.0783 6.17143 10.0609 5.75 9 5.75ZM9 7.75C9.53043 7.75 10.0391 7.96071 10.4142 8.33579C10.7893 8.71086 11 9.21957 11 9.75C11 10.2804 10.7893 10.7891 10.4142 11.1642C10.0391 11.5393 9.53043 11.75 9 11.75C8.46957 11.75 7.96086 11.5393 7.58579 11.1642C7.21071 10.7891 7 10.2804 7 9.75C7 9.21957 7.21071 8.71086 7.58579 8.33579C7.96086 7.96071 8.46957 7.75 9 7.75ZM13.5 4.25C13.2348 4.25 12.9804 4.35536 12.7929 4.54289C12.6054 4.73043 12.5 4.98478 12.5 5.25C12.5 5.51522 12.6054 5.76957 12.7929 5.95711C12.9804 6.14464 13.2348 6.25 13.5 6.25C13.7652 6.25 14.0196 6.14464 14.2071 5.95711C14.3946 5.76957 14.5 5.51522 14.5 5.25C14.5 4.98478 14.3946 4.73043 14.2071 4.54289C14.0196 4.35536 13.7652 4.25 13.5 4.25Z"
                  fill="#080808"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <h3>Book Free Consultation</h3>
        <ContactForm />
      </div>
    </section>
  );
}
