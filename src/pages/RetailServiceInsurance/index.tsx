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

export default function RetailServiceInsurance() {
  const metadata = {
    title: "Retail & Service Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Retail & Service Insurance made simple */}
      <IndustryHero
        title="Retail & Service Insurance made simple"
        subtitle="Protect your retail and service business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for retail and service businesses, ensuring your operations are protected from inventory to customer service."
        image="/assets/images/retail.png"
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