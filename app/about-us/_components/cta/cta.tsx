import Image from "next/image";

export default async function CTA() {
  return (
    <section className="about-cta">
      <h2>
        Why <span>Choose Us</span>
      </h2>
      <p>
        Proven Expertise, Personalized Support, and A Commitment to helping your
        business thrive.
      </p>
      <div className="cta-actions">
        <a href="https://calendly.com/neetujainca/caneetujain" className="btn">
          <Image
            src="/icons/calendar-tick.svg"
            alt="Calendar Tick Icon"
            width={30}
            height={30}
          />
          <span>
            SCHEDULE CONSULTATION
            <br />
            Online Meeting
          </span>
        </a>
        <a href="tel:+971527941604" data-variant="outline" className="btn">
          <Image src="/icons/call.svg" alt="Call Icon" width={30} height={30} />
          <span>
            CALL US
            <br />
            +971527941604
          </span>
        </a>
        <a
          href="https://wa.me/+971527941604"
          data-variant="outline"
          className="btn"
        >
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp Icon"
            width={30}
            height={30}
          />
          <span>
            WHATSAPP US
            <br />
            +971527941604
          </span>
        </a>
      </div>
    </section>
  );
}
