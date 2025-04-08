import {
  Meta,
  Hero,
  Banner,
  BestDeals,
  BestOffers,
  ContactUs,
  Specialities,
  Testimonials,
} from "@/components";

export default function Home() {
  const metadata = {
    title: "Home || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };

  return (
    <>
      <Meta meta={metadata} />

      {/* we specialize in the unexpected */}
      <Hero />
      {/* trusted by hundreds */}
      <Banner />
      {/* we find you the best deals */}
      <BestDeals />
      {/* we search and compare the best insurance offers */}
      <BestOffers />
      {/* our specialities */}
      <Specialities />
      {/* testimonials */}
      <Testimonials />
      {/* contact form  */}
      <ContactUs />
      {/* footer
      <Footer /> */}
    </>
  );
}
