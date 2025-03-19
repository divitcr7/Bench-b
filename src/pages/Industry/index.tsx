import {
  Meta,
  IndustryHero,
  Details,
  ProductAndServices,
  Tools
} from "./../../components";

export default function Home() {
  const metadata = {
    title: "Industry || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* Construction Insurance made simple */}
      <IndustryHero />
      {/* details */}
      <Details />
      {/* products and services */}
      <ProductAndServices />
      {/* tools */}
      <Tools/>
    </>
  );
}
