import Choosing from "./_components/choosing/choosing";
import Compliant from "./_components/compliant/compliant";
import CoreServices from "./_components/core-services/core-services";
import Hero from "./_components/hero/hero";
import TrustedExperts from "./_components/trusted-experts/trusted-experts";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <TrustedExperts />
      <Compliant />
      <Choosing />
    </>
  );
}
