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

export default function HealthcareInsurance() {
  const metadata = {
    title: "Healthcare Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Healthcare Insurance made simple */}
      <IndustryHero
        title="Healthcare Insurance made simple"
        subtitle="Protect your healthcare business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the healthcare industry, ensuring your practice and patients are covered from diagnosis to treatment."
        image="/assets/images/Hospital.png"
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