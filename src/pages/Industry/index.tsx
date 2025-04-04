import {
  Meta,
  IndustryHero,
  Details,
  ProductAndServices,
  Tools,
  Associations,
  AppDownload,
  Questions,
  OurBlog,
  ContactUs,
  Footer
} from "@/components";

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
      <Tools />
      {/* our customers and associations */}
      <Associations />
      {/* application download  */}
      <AppDownload />
      {/* frequently asked questions */}
      <Questions />
      {/* our blog */}
      <OurBlog />
      {/* contact us */}
      <ContactUs />
      {/* footer */}
      <Footer />
    </>
  );
}
