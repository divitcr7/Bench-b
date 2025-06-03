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

export default function ManufacturingInsurance() {
  const metadata = {
    title: "Manufacturing Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Manufacturing Insurance made simple */}
      <IndustryHero
        title="Manufacturing Insurance made simple"
        subtitle="Protect your manufacturing operations with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for manufacturing companies, ensuring your operations are covered from raw materials to finished products."
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