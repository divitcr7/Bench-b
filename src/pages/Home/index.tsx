import {
  Meta,
  Hero,
  Banner,
  BestDeals,
  BestOffers,
  ContactUs,
  Footer,
  Specialities,
  Testimonials,
} from "./../../components";
import { useOutletContext } from "react-router-dom";

interface HomeProps {
  contactRef: React.RefObject<HTMLElement>;
}

export default function Home() {
  const { contactRef } = useOutletContext<HomeProps>();
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
      <section ref={contactRef}>
        <ContactUs />
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}
