import {
  Meta,
  IndustryHero,
  Details,
  WhyBenchmarkIndustry,
  ProductAndServices,
  Partners,
  WhoWeServe,
  Questions,
  OurBlog,
  ContactUs,
} from "@/components";

export default function Industry() {
  const metadata = {
    title: "Industry || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Industry Insurance made simple */}
      <IndustryHero
        title="Industry Insurance made simple"
        subtitle="Protect your business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for various industries, ensuring your business is covered from operations to compliance."
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
