import FAQToggler from "./faq-toggler";

export interface FAQ {
  question: string;
  answer: string;
}

function fetchFAQs(): FAQ[] {
  return [
    {
      question: "What services do you provide?",
      answer:
        "We offer corporate tax registration and filing, VAT services, bookkeeping, accounting setup, and ongoing advisory support for businesses in Dubai and the UAE.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Our services are tailored for startups, SMEs, and established businesses looking for expert financial and tax advisory in the UAE.",
    },
    {
      question: "How quickly can you handle corporate tax filings?",
      answer:
        "We prioritize timely submissions and can typically handle corporate tax filings within 2-4 weeks, depending on the complexity of the case.",
    },
    {
      question: "Can you assist with VAT registration and refunds?",
      answer:
        "Yes, we can assist with VAT registration and help businesses claim VAT refunds.",
    },
    {
      question: "Do you provide ongoing support after filings?",
      answer:
        "Yes, we offer ongoing support and advisory services even after the initial filings are completed.",
    },
    {
      question: "How do I get started with Wealthix Advisors?",
      answer:
        "Getting started is easy! Simply contact us through our website or give us a call, and we'll guide you through the onboarding process.",
    },
  ];
}

export default async function FAQs() {
  return (
    <section className="faqs">
      <h2>FAQ</h2>
      <ul className="faqs-container">
        {fetchFAQs().map((faq, index) => (
          <li
            key={index}
            data-opened="false"
            id={`faq-${index}`}
            className="faq-card"
          >
            <h3 className="faq-question">
              {faq.question}
              <span className="faq-icon">
                <svg
                  width="26"
                  height="15"
                  viewBox="0 0 26 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3656 0.924346C25.014 0.572838 24.5371 0.375371 24.04 0.375371C23.5428 0.375371 23.0659 0.572838 22.7143 0.924346L13.4331 10.2056L4.15183 0.924344C3.7982 0.582798 3.32457 0.393808 2.83295 0.398081C2.34133 0.402352 1.87106 0.599543 1.52342 0.947184C1.17577 1.29482 0.978585 1.7651 0.974313 2.25672C0.970042 2.74834 1.15903 3.22196 1.50058 3.57559L12.1075 14.1825C12.4591 14.534 12.9359 14.7314 13.4331 14.7314C13.9303 14.7314 14.4071 14.534 14.7587 14.1825L25.3656 3.57559C25.7171 3.22398 25.9146 2.74715 25.9146 2.24997C25.9146 1.75279 25.7171 1.27596 25.3656 0.924346Z"
                    fill="white"
                  />
                </svg>
              </span>
            </h3>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
      <FAQToggler />
    </section>
  );
}
