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

export default function EnergyInsurance() {
  const metadata = {
    title: "Energy Insurance || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Energy Insurance made simple */}
      <IndustryHero
        title="Energy Insurance made simple"
        subtitle="Protect your energy business with comprehensive insurance solutions."
        description="Benchmark offers tailored insurance products and services for the energy industry, ensuring your operations are covered from exploration to distribution."
        image="/assets/images/energy.png"
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