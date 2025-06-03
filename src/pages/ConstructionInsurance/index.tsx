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

export default function ConstructionInsurance() {
  const metadata = {
    title: "Construction Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Construction Insurance made simple */}
      <IndustryHero
        title="Construction Insurance made simple"
        subtitle="Protect your construction projects with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for construction companies, ensuring your projects are covered from groundbreaking to completion."
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