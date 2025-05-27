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

export default function ManufacturingInsurance() {
  const metadata = {
    title: "Manufacturing Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Manufacturing Insurance made simple */}
      <IndustryHero
        title="Manufacturing Insurance made simple"
        subtitle="Protect your manufacturing business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the manufacturing industry, ensuring your operations are covered from production to distribution."
        image="/assets/images/manufacturing.png"
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