import {
  Meta,
  AboutUsHero,
  Careers,
  OurMission,
  WhyBenchmark,
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
    </>
  );
}
