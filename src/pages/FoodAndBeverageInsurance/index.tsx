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