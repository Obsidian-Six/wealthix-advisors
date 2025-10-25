import Image from "next/image";

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
          </svg>{" "}
          Working Hours: <span>Mon-Fri, 8:30 AM - 5:30 PM</span>
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
          </svg>{" "}
          Session Duration:
          <span>30 minutes per inquiry</span>
        </p>
        <button type="button">
          Book Your Free Consultation Now
          {/* Arrow Right */}
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_61_126)">
              <path
                d="M3.61619 2.045C3.38185 2.27941 3.25021 2.59729 3.25021 2.92875C3.25021 3.2602 3.38185 3.57809 3.61619 3.8125L9.80369 10L3.61619 16.1875C3.38849 16.4233 3.2625 16.739 3.26535 17.0668C3.2682 17.3945 3.39966 17.708 3.63142 17.9398C3.86318 18.1715 4.17669 18.303 4.50444 18.3058C4.83218 18.3087 5.14794 18.1827 5.38369 17.955L12.4549 10.8837C12.6893 10.6493 12.8209 10.3315 12.8209 10C12.8209 9.66854 12.6893 9.35066 12.4549 9.11625L5.38369 2.045C5.14928 1.81066 4.8314 1.67902 4.49994 1.67902C4.16848 1.67902 3.8506 1.81066 3.61619 2.045Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_61_126">
                <rect
                  width="20"
                  height="14"
                  fill="white"
                  transform="matrix(0 1 -1 0 14 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <p className="small">
          *Free consultation is limited to 30min per client and includes general
          advice; detailed financial planning or audit services may incur
          additional charges.
        </p>
      </div>
      <figure className="schedule-right">
        <Image
          src="/wealthix-advisors/schedule.png"
          alt="Schedule Consultation"
          layout="responsive"
          width={500}
          height={560}
        />
      </figure>
    </section>
  );
}
