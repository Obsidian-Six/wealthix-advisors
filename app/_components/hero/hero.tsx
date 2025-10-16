export default async function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Expert Tax and Compliance Advisory in Dubai<span>.</span>
        </h1>
        <button type="button">
          Schedule Consultation Today
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
      </div>
      <div className="hero-right">
        <p>
          At <span>Wealthix Advisors</span>, we help businesses stay compliant
          and financially
          <span>secure</span> with
        </p>
        <ul>
          <li>Corporate and VAT tax advisory tailored to UAE laws</li>
          <li>Complete compliance management for hassle-free operations</li>
          <li>Independent audits to build trust and transparency</li>
          <li>Accurate accounting and financial reporting</li>
        </ul>
      </div>
    </section>
  );
}
