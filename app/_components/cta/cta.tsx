import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta">
      <h2>
        Ready for <span>Stress-Free</span> Corporate Tax Compliance?
      </h2>
      <p>
        Your dedicated expert tax consultant is just a click away. With{" "}
        <span>Wealthix Advisors</span>, corporate tax in the UAE is simple and
        hassle-free. We help you stay fully compliant, avoid penalties, and
        optimize tax benefits.
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
