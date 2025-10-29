import Image from "next/image";

export default async function CoreServices() {
  return (
    <section className="core-services">
      <h2>
        Your Personal <span>Tax and Compliance Partner</span>
      </h2>
      <div className="core-services-container">
        <article className="core-services-card">
          <div className="services-card-header">
            <Image
              src={"/icons/team.svg"}
              alt="Your personal Team"
              width={30}
              height={30}
            />
            <h3>Your personal Team</h3>
          </div>
          <p>
            You’re never just another client to us. A dedicated team of experts
            works exclusively on your portfolio, ensuring proactive
            communication, deep business understanding, and consistent delivery.
            We take care of every financial detail so you can focus on what
            truly matters — growth.
          </p>
        </article>
        <article className="core-services-card">
          <div className="services-card-header">
            <Image
              src={"/icons/compliance.svg"}
              alt="Compliance Solutions"
              width={30}
              height={30}
            />
            <h3>50+ Tailored Compliance Solutions</h3>
          </div>
          <p>
            With over 50 customized compliance frameworks delivered, we ensure
            your business stays fully aligned with every regulation. From tax
            filings and audits to corporate governance, our solutions are built
            to simplify complexity and protect your operations with accuracy and
            efficiency.
          </p>
        </article>
        <article className="core-services-card">
          <div className="services-card-header">
            <Image
              src={"/icons/advisory.svg"}
              alt="100% Personalized Advisory"
              width={30}
              height={30}
            />
            <h3>100% Personalized Advisory</h3>
          </div>
          <p>
            Every client deserves a unique roadmap. We offer fully personalized
            advisory services designed around your financial goals, helping you
            optimize tax, manage risks, and plan strategically. Our insights
            empower you to make confident business decisions that drive
            measurable, sustainable growth.
          </p>
        </article>
        <article className="core-services-card">
          <div className="services-card-header">
            <Image
              src={"/icons/rapid-response.svg"}
              alt="Rapid Response"
              width={30}
              height={30}
            />
            <h3>Rapid Response</h3>
          </div>
          <p>
            Your time matters. Our team ensures all queries are addressed within
            24 hours, keeping your business moving without delay. From quick
            clarifications to complex financial questions, you’ll always have
            prompt, professional, and reliable support when you need it most.
          </p>
        </article>
      </div>
    </section>
  );
}
