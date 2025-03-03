import {Meta,Hero,Banner,BestDeals} from "./../../components"

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
      <BestDeals/>
    </>
  );
}
