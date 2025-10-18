import Choosing from "./_components/choosing/choosing";
import Compliant from "./_components/compliant/compliant";
import CoreServices from "./_components/core-services/core-services";
import CTA from "./_components/cta/cta";
import FAQs from "./_components/faqs/faqs";
import GetInTouch from "./_components/get-in-touch/get-in-touch";
import Hero from "./_components/hero/hero";
import Testimonial from "./_components/testimonials/testimonial";
import TrustedExperts from "./_components/trusted-experts/trusted-experts";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <TrustedExperts />
      <Compliant />
      <Choosing />
      <Testimonial />
      <CTA />
      <FAQs />
      <GetInTouch />
    </>
  );
}
