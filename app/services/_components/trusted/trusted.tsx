import Image from "next/image";

export default function Trusted() {
  return (
    <section className="services-trusted">
      <div className="services-trusted-block">
        <div className="services-trusted-block-left">
          <h2>
            <span>Trusted</span> Accounting & Bookkeeping Support for Your UAE
            Business
          </h2>
          <p>
            Strong financial oversight is the foundation of lasting business
            success. In the UAE’s ever-evolving regulatory environment,
            maintaining accurate and well-structured financial records isn’t
            just recommended — it’s essential.
          </p>
        </div>
        <figure className="services-trusted-block-right">
          <Image
            src={"/services-trusted.jpg"}
            alt="Trusted Accounting and Bookkeeping Support"
            width={500}
            height={400}
          />
          <figcaption>Trusted Accounting and Bookkeeping Support</figcaption>
        </figure>
      </div>
      <div className="services-trusted-container">
        <p className="services-trusted-container-header">
          A qualified accountant ensures your financial statements reflect a
          clear and compliant picture of your company’s performance. At Wealthix
          Advisors, our team aligns every report with UAE accounting standards
          and tax laws to protect your business by:
        </p>
        <ul className="services-trusted-container-list">
          <li className="services-trusted-container-list-item">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="white"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Preventing income misreporting and financial discrepancies
          </li>
          <li className="services-trusted-container-list-item">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="white"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Reducing the risk of penalties and compliance issues
          </li>
          <li className="services-trusted-container-list-item">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="white"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ensuring you meet your tax obligations accurately — paying only
            what’s due
          </li>
        </ul>
        <p className="services-trusted-container-footer">
          By combining precision, compliance, and strategic insight, Wealthix
          Advisors helps you safeguard your operations and strengthen your
          financial position for long-term growth.
        </p>
      </div>
    </section>
  );
}
