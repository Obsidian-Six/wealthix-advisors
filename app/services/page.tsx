import CTA from "../_components/cta/cta";
import Benefits from "./_components/benefits/benefits";
import Hero from "./_components/hero/hero";
import Message from "./_components/message/message";
import Offer from "./_components/offer/offer";
import Trusted from "./_components/trusted/trusted";

export default function Page() {
  return (
    <>
      <Hero />
      <Message />
      <Trusted />
      <Benefits />
      <Offer />
      <CTA />
    </>
  );
}
