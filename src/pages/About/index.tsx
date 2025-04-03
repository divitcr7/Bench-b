import {
  Meta,
  AboutUsHero,
  Careers,
  OurMission,
  WhyBenchmark,
  WhatWeDo,
  OurTeam,
  Banner,
  Memberships,
  ContactUs,
  Footer
} from "./../../components";

export default function Home() {
  const metadata = {
    title: "About Us || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* about benchmark insurance */}
      <AboutUsHero />
      {/* careers */}
      <Careers />
      {/* our mission */}
      <OurMission />
      {/* why benchmark */}
      <WhyBenchmark />
      {/* what we do  */}
      <WhatWeDo />
      {/* our team */}
      <OurTeam />
      {/* banner */}
      <Banner/>
      {/* our memberships */}
      <Memberships/>
      {/* contact us */}
      <ContactUs/>
      {/* footer */}
      <Footer/>
    </>
  );
}
