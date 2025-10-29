import Image from "next/image";

export default async function Hero() {
  return (
    <section className="services-hero">
      <div className="services-hero-left">
        <h1>
          <span>Smart</span> Accounting Solutions for Modern Businesses
        </h1>
        <p>
          Running a business in the UAE means keeping pace with growth,
          regulation, and change. Our Bookkeeping and Accounting Services are
          tailored to simplify financial management, deliver accuracy, and
          support your expansion with complete confidence
        </p>
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
      </div>
      <figure className="services-hero-right">
        <Image
          src="/services-hero.jpg"
          alt="Bookkeeping and Accounting Hero Image"
          width={460}
          height={530}
        />
      </figure>
    </section>
  );
}
