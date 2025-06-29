import {
  Meta,
  Hero,
  Banner,
  BestDeals,
  BestOffers,
  WhatSetsUsApart,
  ContactUs,
  Specialities,
  Testimonials,
} from "./../../components";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { preloadImages, CRITICAL_IMAGES } from "../../utils/imageOptimization";

interface HomeProps {
  contactRef: React.RefObject<HTMLElement>;
}

export default function Home() {
  const { contactRef } = useOutletContext<HomeProps>();
  const metadata = {
    title: "Benchmark Insurance Group of Texas - Commercial Insurance Broker",
    description:
      "Benchmark Insurance Group of Texas - Commercial Insurance Broker",
  };

  // Preload critical images for better performance
  useEffect(() => {
    preloadImages(CRITICAL_IMAGES).catch(console.error);
  }, []);

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
      {/* what sets us apart */}
      <WhatSetsUsApart />
      {/* our specialities */}
      <Specialities />
      {/* testimonials */}
      <Testimonials />
      {/* contact form  */}
      <section ref={contactRef}>
        <ContactUs />
      </section>
      {/* footer */}
      {/* <Footer /> */}
    </>
  );
}
