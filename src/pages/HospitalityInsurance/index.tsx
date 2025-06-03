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

export default function HospitalityInsurance() {
  const metadata = {
    title: "Hospitality Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Hospitality Insurance made simple */}
      <IndustryHero
        title="Hospitality Insurance made simple"
        subtitle="Comprehensive insurance solutions for the hospitality industry."
        description="Benchmark provides specialized insurance coverage for hotels, restaurants, bars, and entertainment venues, protecting your business from unique hospitality risks."
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