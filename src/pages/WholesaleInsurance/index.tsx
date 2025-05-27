import {
  Meta,
  IndustryHero,
  Details,
  ProductAndServices,
  Tools,
  Associations,
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
      {/* details */}
      <Details />
      {/* products and services */}
      <ProductAndServices />
      {/* tools */}
      <Tools />
      {/* our customers and associations */}
      <Associations />
      {/* frequently asked questions */}
      <Questions />
      {/* our blog */}
      <OurBlog />
      {/* contact us */}
      <ContactUs />
    </>
  );
} 