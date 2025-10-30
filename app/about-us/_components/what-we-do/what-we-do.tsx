import Image from "next/image";

export default async function WhatWeDo() {
  return (
    <section className="about-wwd">
      <h2>What We Do</h2>
      <figure className="about-wwd-left">
        <Image
          src={"/what-we-do.png"}
          alt="What We Do at Wealthix Advisors"
          width={500}
          height={500}
          priority
        />
        <figcaption>What We Do at Wealthix Advisors</figcaption>
      </figure>
      <div className="about-wwd-right">
        <p className="about-wwd-intro">
          At <span>Wealthix Advisors</span>, we provide tailored solutions for
          startups, SMEs, and large enterprises, ensuring compliance, accuracy,
          and strategic growth.
        </p>
        <p className="about-wwd-services-title">Our Services Include</p>
        <ul>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="#080808"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Corporate & VAT Tax Advisory
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="#080808"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Accounting & Bookkeeping
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="#080808"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Compliance Management{" "}
          </li>
          <li>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.28125 18.2812L7.96875 22.9688M14.5312 15.4688L19.2188 10.7812M10.7812 18.2812L15.4688 22.9688L26.7188 10.7812"
                stroke="#080808"
                strokeWidth="2.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            CFO Services
          </li>
        </ul>
      </div>
    </section>
  );
}
