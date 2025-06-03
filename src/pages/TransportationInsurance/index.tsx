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

export default function TransportationInsurance() {
  const metadata = {
    title: "Transportation Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Transportation Insurance made simple */}
      <IndustryHero
        title="Transportation Insurance made simple"
        subtitle="Protect your transportation business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the transportation industry, ensuring your fleet and operations are covered from pickup to delivery."
        image="/assets/images/transport.png"
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