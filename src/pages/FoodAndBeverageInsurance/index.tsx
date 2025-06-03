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

export default function FoodAndBeverageInsurance() {
  const metadata = {
    title: "Food & Beverage Insurance || Benchmark - Insurance",
    description: "Benchmark - Food & Beverage Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Food And Beverage insurance made simple */}
      <IndustryHero
        title="Food And Beverage insurance made simple!"
        subtitle="Anticipating and responding to the coverage needs"
        description="Benchmark provides tailored insurance solutions for the food and beverage industry, helping you protect your business, staff, and customers with confidence."
        image="/assets/images/food.png"
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