import Profile from "@/public/profile.png";
import Image from "next/image";
export default async function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          <span>AI-Powered</span> <br /> Accounting for Smarter Business
          Decisions
        </h1>
        <p>
          Streamline bookkeeping, VAT, and corporate tax with intelligent
          automation. Real-time insights, accurate reporting, and actionable
          recommendations — all in one platform.
        </p>
        <button type="button" className="cta-action">
          Book Your Free Consultation
          {/* Arrow Right */}
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
      </div>
      <div className="hero-right">
        {/* <ul>
          <li>
            Customized Corporate & VAT tax strategies aligned with UAE
            regulations
          </li>
          <li>
            Seamless compliance management to ensure smooth business operations
          </li>
          <li>
            Accurate financial reporting and accounting for sound
            decision-making
          </li>
        </ul> */}
        <figure>
          <Image src={Profile} alt="CA Neetu" width={400} height={400} />
          <figcaption>
            <strong>CA Neetu</strong>
            <br />- Founder
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
