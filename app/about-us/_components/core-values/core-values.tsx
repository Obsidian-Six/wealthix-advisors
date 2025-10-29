import Image from "next/image";

export default async function CoreValues() {
  return (
    <section className="about-core-values">
      <h2>
        Our <span>Core Values</span>
      </h2>
      <p>What Drives Us</p>
      <div className="about-core-values-container">
        <article className="about-core-value-card integrity">
          <div className="core-value-card-icon">
            <Image
              src={"/icons/integrity.svg"}
              alt="Integrity Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Integrity</h3>
          <p>
            We uphold the highest ethical standards, ensuring honesty,
            transparency, and trust in every client relationship.
          </p>
        </article>
        <article className="about-core-value-card confidentiality">
          <div className="core-value-card-icon">
            <Image
              src={"/icons/confidentiality.svg"}
              alt="Confidentiality Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Confidentiality</h3>
          <p>
            Your data is secure with us. We safeguard your financial information
            with absolute discretion and reliability.
          </p>
        </article>
        <article className="about-core-value-card accuracy">
          <div className="core-value-card-icon">
            <Image
              src={"/icons/accuracy.svg"}
              alt="Accuracy Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Accuracy</h3>
          <p>
            Every figure matters. Our meticulous attention to detail ensures
            precise reporting and compliance every time.
          </p>
        </article>
        <article className="about-core-value-card growth">
          <div className="core-value-card-icon">
            <Image
              src={"/icons/growth.svg"}
              alt="Growth Icon"
              width={32}
              height={32}
            />
          </div>
          <h3>Growth</h3>
          <p>
            Beyond compliance, we help you plan, scale, and achieve sustainable
            financial growth with strategic insights.
          </p>
        </article>
      </div>
    </section>
  );
}
