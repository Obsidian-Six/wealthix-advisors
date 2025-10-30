import CTA from "../_components/cta/cta";
import CoreValues from "./_components/core-values/core-values";
import Hero from "./_components/hero/hero";
import Mission from "./_components/mission/mission";
import WhatWeDo from "./_components/what-we-do/what-we-do";

export default function Page() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <CoreValues />
      <Mission />
      <CTA />
    </>
  );
}
