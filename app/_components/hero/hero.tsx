import Profile from "@/public/profile.png";
import Image from "next/image";
import HeroHighlights from "./hero-highlights";

export default async function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          <span>AI-Powered</span> Accounting <br /> for Smarter Business
          Decisions
        </h1>
        <p>
          Streamline bookkeeping, VAT, and corporate tax with intelligent
          automation. Real-time insights, accurate reporting, and actionable
          recommendations — all in one platform.
        </p>
        <a
          href="https://calendly.com/neetujainca/caneetujain"
          target="_blank"
          className="cta-action btn"
        >
          Book Your Free Consultation
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow Right"
            width={14}
            height={20}
          />
        </a>
      </div>
      <div className="hero-right">
        <div className="hero-right-container">
          <HeroHighlights
            items={[
              "Customized Corporate & VAT tax strategies aligned with UAE regulations",
              "Seamless compliance management to ensure smooth business operations",
              "Accurate financial reporting and accounting for sound decision-making",
            ]}
            intervalMs={4000}
            animationMs={700}
          />

          <figure>
            <Image src={Profile} alt="Neetu Jain" width={400} height={400} />
            <figcaption>
              <strong>Neetu Jain</strong>
              <br />
              Your Consultant
            </figcaption>
          </figure>

          <p className="hero-right-title">
            <span>Neetu Jain</span>
            <br />
            Chartered Accountant
          </p>
        </div>
      </div>
    </section>
  );
}
