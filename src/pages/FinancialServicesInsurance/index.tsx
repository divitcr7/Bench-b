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

export default function FinancialServicesInsurance() {
  const metadata = {
    title: "Financial Services Insurance || Benchmark - Insurance",
    description: "Benchmark - Financial Services Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Financial Services insurance made simple */}
      <IndustryHero
        title="Financial Services insurance made simple!"
        subtitle="Protecting your financial business with confidence."
        description="Benchmark provides specialized insurance solutions for financial institutions, helping you manage risk, ensure compliance, and safeguard your clients and assets."
        image="/assets/images/financial-service.png"
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