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

export default function NonProfitInsurance() {
  const metadata = {
    title: "Non-Profit Insurance || Benchmark - Insurance",
    description: "Benchmark - Non-Profit Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Non-Profit insurance made simple */}
      <IndustryHero
        title="Non-Profit insurance made simple!"
        subtitle="Empowering your mission with reliable protection."
        description="Benchmark offers tailored insurance solutions for non-profit organizations, helping you focus on your mission while we protect your people, property, and reputation."
        image="/assets/images/non-profit.png"
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