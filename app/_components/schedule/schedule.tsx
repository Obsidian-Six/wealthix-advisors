import Image from "next/image";
import ScheduleImage from "@/public/schedule.png";
export default function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule-left">
        <h2>
          <span>Schedule Your Consultation</span> with Wealthix Advisors
        </h2>
        <p>
          Fast, hassle-free appointments with our tax experts — guaranteed reply
          in 30 minutes.
        </p>
        <p className="timing">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 12.0163 25.0647 9.15483 22.955 7.04505C20.8452 4.93526 17.9837 3.75 15 3.75C12.0163 3.75 9.15483 4.93526 7.04505 7.04505C4.93526 9.15483 3.75 12.0163 3.75 15Z"
              stroke="#080808"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 8.75V15L18.75 18.75"
              stroke="#080808"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="placeholder">Working Hours:</span>
          <span className="time">Mon-Fri, 8:30 AM - 5:30 PM</span>
        </p>
        <p className="timing">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 2.5H22.5V10L17.5 15L22.5 20V27.5H7.5V20L12.5 15L7.5 10V2.5ZM20 20.625L15 15.625L10 20.625V25H20V20.625ZM15 14.375L20 9.375V5H10V9.375L15 14.375ZM12.5 7.5H17.5V8.4375L15 10.9375L12.5 8.4375V7.5Z"
              fill="#080808"
            />
          </svg>
          <span className="placeholder">Session Duration:</span>
          <span className="time">30 minutes per inquiry</span>
        </p>
        <a
          href="https://calendly.com/neetujainca/caneetujain"
          target="_blank"
          className="cta-action btn"
        >
          Book Your Free Consultation
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow Right"
            width={14}
            height={20}
          />
        </a>
        <p className="small">
          *Free consultation is limited to 30min per client and includes general
          advice; detailed financial planning or audit services may incur
          additional charges.
        </p>
      </div>
      <figure className="schedule-right">
        <Image
          src={ScheduleImage}
          alt="Schedule Consultation"
          layout="responsive"
          width={500}
          height={560}
        />
      </figure>
    </section>
  );
}
