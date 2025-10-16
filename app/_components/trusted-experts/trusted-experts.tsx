import Image from "next/image";
import TrustedExpertsImage from "@/public/trusted-experts.png";

export default async function TrustedExperts() {
  return (
    <section className="trusted-experts">
      <h2>
        <span>Trusted Experts</span> in Tax, Compliance, and Business Advisory
      </h2>
      <p>
        Wealthix Advisors is a boutique firm dedicated to delivering
        comprehensive tax, compliance, and business advisory solutions. Our team
        of skilled professionals brings expertise across finance, accounting,
        auditing, bookkeeping, corporate tax, and business setup services in
        Dubai. We focus on understanding the unique needs of each client,
        providing tailored solutions that help businesses grow, stay compliant,
        and achieve their goals. At Wealthix Advisors, we prioritize building
        lasting relationships founded on trust, transparency, and integrity.
      </p>
      <figure>
        <Image
          src={TrustedExpertsImage}
          alt="Trusted Experts"
          width={524}
          height={424}
          priority
        />
        <figcaption>
          Our team of trusted experts is here to help you navigate the
          complexities
        </figcaption>
      </figure>
    </section>
  );
}
