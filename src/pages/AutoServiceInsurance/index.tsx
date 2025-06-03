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

export default function AutoServiceInsurance() {
  const metadata = {
    title: "Auto Service Insurance || Benchmark - Insurance",
    description: "Benchmark - Auto Service Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Auto Service insurance made simple */}
      <IndustryHero
        title="Auto Service insurance made simple!"
        subtitle="Protecting your auto service business with tailored coverage."
        description="Benchmark offers specialized insurance solutions for auto service providers, ensuring your operations, staff, and customers are protected."
        image="/assets/images/auto-service.png"
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