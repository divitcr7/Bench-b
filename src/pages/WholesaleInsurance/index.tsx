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

export default function WholesaleInsurance() {
  const metadata = {
    title: "Wholesale Insurance || Benchmark - Insurance",
    description: "Benchmark - Wholesale Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Wholesale insurance made simple */}
      <IndustryHero
        title="Wholesale insurance made simple!"
        subtitle="Comprehensive coverage for your wholesale business."
        description="Benchmark delivers tailored insurance solutions for wholesalers, helping you protect your inventory, operations, and business relationships."
        image="/assets/images/wholesale.png"
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