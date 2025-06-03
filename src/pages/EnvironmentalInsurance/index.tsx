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

export default function EnvironmentalInsurance() {
  const metadata = {
    title: "Environmental Insurance || Benchmark - Insurance",
    description: "Benchmark - Environmental Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Environmental insurance made simple */}
      <IndustryHero
        title="Environmental insurance made simple!"
        subtitle="Safeguarding your business against environmental risks."
        description="Benchmark delivers comprehensive insurance solutions for environmental risks, helping you protect your business, community, and the environment."
        image="/assets/images/energy.png"
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