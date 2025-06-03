import {
  Meta,
  IndustryHero,
  Details,
  WhyBenchmarkIndustry,
  ProductAndServices,
  WhoWeServe,
  Partners,
  Questions,
  OurBlog,
  ContactUs,
} from "@/components";

export default function RealEstateInsurance() {
  const metadata = {
    title: "Real Estate Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Real Estate Insurance made simple */}
      <IndustryHero
        title="Real Estate Insurance made simple"
        subtitle="Protect your real estate portfolio with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for real estate investors and property managers, ensuring your properties and investments are covered from acquisition to exit."
        image="/assets/images/industry.png"
      />
      {/* our approach */}
      <Details />
      {/* why benchmark */}
      <WhyBenchmarkIndustry />
      {/* products and services */}
      <ProductAndServices />
      {/* who we serve */}
      <WhoWeServe />
      {/* partners */}
      <Partners />
      {/* frequently asked questions */}
      <Questions />
      {/* our blog */}
      <OurBlog />
      {/* contact us */}
      <ContactUs />
    </>
  );
} 