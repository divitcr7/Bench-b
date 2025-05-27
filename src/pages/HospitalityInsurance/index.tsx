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
        subtitle="Protect your hospitality business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the hospitality industry, ensuring your business is covered from kitchen to guest room."
        image="/assets/images/Hospital.png"
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