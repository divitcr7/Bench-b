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

export default function ConstructionInsurance() {
  const metadata = {
    title: "Construction Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Construction Insurance made simple */}
      <IndustryHero
        title="Construction Insurance made simple"
        subtitle="Protect your construction business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the construction industry, ensuring your projects and people are covered from start to finish."
        image="/assets/images/construct.png"
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