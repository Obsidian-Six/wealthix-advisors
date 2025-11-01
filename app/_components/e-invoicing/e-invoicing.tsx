import Image from "next/image";
import EInvoicingAssistance from "./e-invoicing-assistance";

export default async function EInvoicing() {
  return (
    <section className="e-invoicing">
      <div className="e-invoicing-left">
        <h2>
          Stay Ahead with UAE-Compliant <span>E-Invoicing</span>
        </h2>
        <p>
          Wealthix Advisors provides full e-invoicing support for businesses in
          the UAE:
        </p>
        <ul className="e-invoicing-list">
          <li>Automated invoice generation & submission</li>
          <li>Instant reporting & audit-ready documentation</li>
          <li>Compliance with FTA e-invoicing regulations</li>
          <li>Integration with your accounting software</li>
        </ul>
        <EInvoicingAssistance />
      </div>
      <figure className="e-invoicing-right">
        <Image
          src="/e-invoicing.png"
          alt="E-Invoicing Illustration"
          width={500}
          height={500}
          priority
        />
        <figcaption>E-Invoicing Illustration</figcaption>
      </figure>
    </section>
  );
}
