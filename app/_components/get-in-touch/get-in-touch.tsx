import Image from "next/image";
import GIT from "@/public/get-in-touch.png";
import GetInTouchForm from "./get-in-touch-form";

export default function GetInTouch() {
  return (
    <section className="get-in-touch git">
      <div className="git-left">
        <h2>
          Get in Touch with Our <span>Team</span>
        </h2>
        <p>
          Our team at Wealthix Advisors specializes in corporate tax, VAT,
          accounting, and compliance services. We provide personalized solutions
          and are always ready to answer your questions.
        </p>
        <GetInTouchForm />
      </div>
      <figure className="git-right">
        <Image
          src={GIT}
          alt="Get in Touch with Our Team"
          width={450}
          height={639}
        />
        <figcaption>Get in Touch with Our Team</figcaption>
      </figure>
    </section>
  );
}
